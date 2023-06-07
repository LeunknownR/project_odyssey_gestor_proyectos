import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SUBMODULES_VIEWS } from "./constants";
import { AbsolutePaths } from "src/config/absolutePaths";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Container, Content } from "./styles";
import Tabs from "./components/Tabs/Tabs";

const ProjectPanel = () => {
    //#region States
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    //#endregion
    //#region Effects
    useEffect(() => {
        fillRoutes();
    }, []);
    const fillRoutes = () => {
        setRoutes(SUBMODULES_VIEWS.map(({
            key, path, View
        }) => (
            <Route
                key={key}
                path={path}
                element={<View/>}/>
        )));
    }
    //#endregion
    return (
        <>
        <SidebarMenu />
        <Container>
            <Content>
                <Tabs />
                <Routes>
                    {routes}
                    {routes !== null &&
                    <Route
                        path="*"
                        element={<Navigate to={AbsolutePaths.TaskBoard} replace/>}
                    />}
                </Routes>
            </Content>
        </Container>
        </>
    );
}

export default ProjectPanel;