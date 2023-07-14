import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import Header from "src/views/components/Header/Header";
import { Content, Main } from "./styles";
import { MODULE_VIEWS } from "./constants";
import { MODULE_VIEWS_BY_USER_ROLE } from "src/config/roles";
import { clearStorage } from "src/storage";
import { AbsolutePaths } from "src/config/absolutePaths";
import { currentUserLocalStorage } from "src/storage/user.local";
import ChatService from "./components/ChatService/ChatService";

const MasterRouter = () => {
    const navigate = useNavigate();
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        if (!currentUser) {
            toLogin();
            return;
        }
        try { fillRoutes(currentUser.role.id); } 
        catch (err) {
            toLogin();
        }
    }, []);
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
    return (
        <Main>
            {routesLoaded && 
            <ChatService>
                <Header />
                <Content>
                    <Routes>
                        {routes}
                        {routesLoaded && 
                        <Route 
                            path="*" 
                            element={<Navigate to={AbsolutePaths.Projects} replace />} />}
                    </Routes>
                </Content>
            </ChatService>}
        </Main>
    );
};

export default MasterRouter;
