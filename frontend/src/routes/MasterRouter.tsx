import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import Header from "src/views/components/Header/Header";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";
import { Content, Main } from "./styles";
import { MODULE_VIEWS } from "./constants";
import { MODULE_VIEWS_BY_USER_ROLE } from "src/config/roles";
import { clearStorage } from "src/storage";
import { AbsolutePaths } from "src/config/absolutePaths";
import { currentUserLocalStorage } from "src/storage/user.local";

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
        catch (err) { toLogin(); }
    }, []);
    const toLogin = () => {
        clearStorage();
        navigate(AbsolutePaths.LOGIN);
    };
    const fillRoutes = (roleId: string) => {
        setRoutes(
            MODULE_VIEWS_BY_USER_ROLE[roleId]
                .filter(module => module in MODULE_VIEWS)
                .map(module => {
                    const moduleView = MODULE_VIEWS[module];
                    const { View, path } = moduleView;
                    return (
                        <Route key={module} path={path} element={<View />} />
                    );
                })
        );
    };
    const routesNotLoaded: boolean = routes !== null;
    return (
        <Main>
            {routesNotLoaded && <Header />}
            <SidebarMenu />
            <Content>
                <Routes>
                    {routes}
                    {routesNotLoaded && 
                        <Route path="*" element={<Navigate to={AbsolutePaths.PROJECT_MANAGER} replace />} />
                    }
                </Routes>
            </Content>
        </Main>
    );
};

export default MasterRouter;
