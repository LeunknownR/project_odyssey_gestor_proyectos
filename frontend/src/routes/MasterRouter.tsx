import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import Header from "src/views/components/Header/Header";
import { Content, Main } from "./styles";
import { MODULE_VIEWS } from "./utils/constants";
import { DBRoles, MODULE_VIEWS_BY_USER_ROLE } from "src/config/roles";
import { clearStorage } from "src/storage";
import { AbsolutePaths } from "src/config/absolutePaths";
import { currentUserLocalStorage } from "src/storage/user.local";
import MainMenu from "src/views/components/MainMenu/MainMenu";
import useMainMenuButtons from "src/views/components/MainMenu/utils/hooks/useMainMenuButtons";
import useChatService from "./utils/hooks/useChatService";
import MasterRouterContext from "./utils/context/MasterRouterContext";
import CollaboratorProfileModals from "src/views/components/CollaboratorProfileModals/CollaboratorProfile";
import useModal from "src/components/Modal/utils/hooks/useModal";
import useUserRole from "src/storage/hooks/useUserRole";
import useWebsocket from "src/utils/hooks/useWebsocket";
import WSServicePaths from "src/services/websockets/services";

const MasterRouter = () => {
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    const userRole = useUserRole();
    const navigate = useNavigate();
    const mainMenuButtonHandler = useMainMenuButtons();
    const profileConfigModal = useModal();
    const notificationService = useWebsocket(WSServicePaths.Notifications);
    const isCollaborator: boolean = userRole === DBRoles.Collaborator;
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        if (!currentUser) {
            toLogin();
            return;
        }
        try { 
            init(currentUser.role.id)
        } 
        catch (err) {
            toLogin();
        }
        return notificationService.disconnect;
    }, []);
    const init = (roleId: DBRoles) => {
        fillRoutes(roleId); 
        addMenuButtons(roleId);
        notificationService.connect();
    }
    const addMenuButtons = (role: DBRoles): void => {
        switch (role) {
            case DBRoles.GeneralAdmin:
                addGeneralAdminMenuButtons();
                return;
            case DBRoles.Collaborator:
                addCollaboratorMenuButtons();
                return;
        }
    }
    const addGeneralAdminMenuButtons = (): void => {
        mainMenuButtonHandler.addButton({
            id: "COLLABORATOR_MANAGEMENT",
            icon: "uiw:setting",
            to: AbsolutePaths.CollaboratorManagement,
        }, 2);
    };
    const addCollaboratorMenuButtons = (): void => {
        mainMenuButtonHandler.addButton({
            id: "COLLABORATOR_PROFILE",
            icon: "uiw:setting",
            onClick: () => profileConfigModal.open(true),
        }, 2);
    };
    const toLogin = (): void => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    };
    const fillRoutes = (roleId: string): void => {
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
    const chatServiceHandler = useChatService(mainMenuButtonHandler);
    return (
        <Main>
            {routesLoaded && 
            <MasterRouterContext.Provider value={{
                chatServiceHandler,
                mainMenuButtonHandler,
                openProfileConfigModal: () => profileConfigModal.open(true)
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
                {isCollaborator && <CollaboratorProfileModals profileConfigModal={profileConfigModal}/>}
            </MasterRouterContext.Provider>}
        </Main>
    );
};

export default MasterRouter;
