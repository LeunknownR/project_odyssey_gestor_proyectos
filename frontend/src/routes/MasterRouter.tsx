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

const MasterRouter = () => {
    const navigate = useNavigate();
    const mainMenuButtonHandler = useMainMenuButtons();
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        if (!currentUser) {
            toLogin();
            return;
        }
        try { 
            const { role } = currentUser 
            fillRoutes(role.id); 
            addMenuButtons(role.id); 
        } 
        catch (err) {
            toLogin();
        }
    }, []);
    const addMenuButtons = (role: DBRoles): void => {
        addGeneralAdminMenuButtons(role);
        addCollaboratorMenuButtons(role);
    }
    const addGeneralAdminMenuButtons = (role: DBRoles): void => {
        if (role !== DBRoles.GeneralAdmin) return;
        mainMenuButtonHandler.addButton({
            id: "COLLABORATOR_MANAGEMENT",
            icon: "uiw:setting",
            to: AbsolutePaths.CollaboratorManagement,
        });
    };
    const addCollaboratorMenuButtons = (role: DBRoles): void => {
        if (role !== DBRoles.Collaborator) return;
        mainMenuButtonHandler.addButton({
            id: "COLLABORATOR_PROFILE",
            icon: "uiw:setting",
            onClick: () => console.log("")
        });
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
                mainMenuButtonHandler
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
            </MasterRouterContext.Provider>}
        </Main>
    );
};

export default MasterRouter;
