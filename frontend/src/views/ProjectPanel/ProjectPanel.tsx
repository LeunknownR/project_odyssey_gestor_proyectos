import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SUBMODULES_VIEWS } from "./constants";
import { AbsolutePaths } from "src/config/absolutePaths";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Container, Content } from "./styles";
import Tabs from "./components/Tabs/Tabs";
import ProjectTitle from "../components/ProjectTitle/ProjectTitle";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import { getProjectId } from "src/storage/project.session";
import { requestGetProjectDetailForPanel } from "src/services/projects/relatedToProjects";
import { ProjectDetailsForPanel } from "src/entities/project/entities";

const ProjectPanel = () => {
    //#region States
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsForPanel | null>(null);
    //#endregion
    const preloader = usePreloader();
    //#region Effects
    useEffect(() => {
        fillProjectInfo();
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
    const fillProjectInfo = async () => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetailForPanel(getProjectId());
        preloader.hide();
        if (data === null) return;
        setProjectDetails(data);
    }
    //#endregion
    return (
        <>
        <SidebarMenu />
        <Container>
            <Content>
                {projectDetails && <ProjectTitle name={projectDetails.name} state={projectDetails.state}/>}
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
        <Preloader {...preloader.value} />
        </>
    );
}

export default ProjectPanel;