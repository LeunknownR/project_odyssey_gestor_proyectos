import { Navigate, Route, Routes } from "react-router-dom";
import { ReactElement, useState } from "react";
import Header from "src/views/components/Header/Header";
import { Content, Main } from "./styles";
import { MODULE_VIEWS } from "./utils/constants";
import { DBRoles, MODULE_VIEWS_BY_USER_ROLE } from "src/config/roles";
import { AbsolutePaths } from "src/config/absolutePaths";
import MainMenu from "src/views/components/MainMenu/MainMenu";
import MasterRouterContext from "./utils/context/MasterRouterContext";
import CollaboratorProfileModals from "src/views/components/CollaboratorProfileModals/CollaboratorProfile";
import useUserRole from "src/storage/hooks/useUserRole";
import useInitMainMenuButtons from "./utils/hooks/useInitMainMenuButtons";
import useInitMasterRouter from "./utils/hooks/useInitMasterRouter";
import useModal from "src/components/Modal/utils/hooks/useModal";
import EndedSessionModal from "src/views/components/EndedSessionModal";
import useEndedSessionModal from "src/views/components/EndedSessionModal/utils/hooks/useEndedSessionModal";

const MasterRouter = () => {
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    const userRole = useUserRole();
    const isCollaborator: boolean = userRole === DBRoles.Collaborator;
    const profileConfigModal = useModal();
    const endedSessionModalHandler = useEndedSessionModal();
    const initMainMenuButtonHandler = useInitMainMenuButtons(profileConfigModal);
    const { currentUserHandler, chatServiceHandler } = useInitMasterRouter(
        initMainMenuButtonHandler, 
        fillRoutes,
        endedSessionModalHandler.open
    );
    function fillRoutes(roleId: DBRoles): void {
        setRoutes(
            MODULE_VIEWS_BY_USER_ROLE[roleId]
                .filter(module => module in MODULE_VIEWS)
                .map(module => {
                    const moduleView = MODULE_VIEWS[module];
                    const { View, path } = moduleView;
                    return (
                        <Route 
                            key={module} 
                            path={path} 
                            element={<View />} />
                    );
                })
        );
    };
    const routesLoaded: boolean = routes !== null;
    return (
        <Main>
            {routesLoaded && 
            <MasterRouterContext.Provider value={{
                currentUserHandler, chatServiceHandler,
                mainMenuButtonHandler: initMainMenuButtonHandler.menuButtonsHandler,
                openProfileConfigModal: () => profileConfigModal.open(true),
                openEndedSessionModal: endedSessionModalHandler.open
            }}>
                <Header />
                <MainMenu/>
                <Content>
                    <Routes>
                        {routes}
                        {routesLoaded && 
                        <Route 
                            path="*" 
                            element={<Navigate to={AbsolutePaths.Projects} 
                            replace/>} />}
                    </Routes>
                </Content>
                {isCollaborator && 
                <CollaboratorProfileModals profileConfigModal={profileConfigModal}/>}
            </MasterRouterContext.Provider>}
            <EndedSessionModal {...endedSessionModalHandler.value}/>
        </Main>
    );
};

export default MasterRouter;
