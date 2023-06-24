import { useState, useEffect } from "react";
import { MENU_OPTIONS, SUBMODULES_VIEWS } from "./utils/constants";
import { Navigate, Route, Routes } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import { PanelTabProps } from "../../types";
import { FlexFlow } from "src/components/styles";
import { ProjectDetailsForPanel } from "src/entities/project/entities";
import { requestGetProjectDetailForPanel } from "src/services/projects/relatedToProjects";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";
import { Container } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const ProjectPanel = ({ preloader, projectId }: PanelTabProps) => {
    //#region States
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsForPanel | null>(null);
    //#endregion
    const { isMobile } = useMainContext();
    //#region Effects
    useEffect(() => {
        fillProjectInfo();
    }, []);
    const fillProjectInfo = async (): Promise<void> => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetailForPanel(projectId);
        preloader.hide();
        if (data === null) return;
        setProjectDetails(data);
    }
    //#endregion
    return (
        <Container 
            direction="column" 
            width="100%" gap="30px">
            {projectDetails && 
            <ProjectTitle 
                name={projectDetails.name} 
                state={projectDetails.state} 
                options={MENU_OPTIONS}/>}
            <FlexFlow  width="100%" direction="column" gap="20px">
                {!isMobile && <Tabs projectId={projectId} />}
                <Routes>
                    {SUBMODULES_VIEWS.map(({ key, path, View }) => (
                        <Route
                            key={key}
                            path={path}
                            element={
                                <View preloader={preloader} 
                                    projectId={projectId} 
                                    projectRoleId={projectDetails?.projectRoleId} />}
                        />
                    ))}
                    <Route path="*" element={<Navigate to={`/proyectos/${projectId}/detalles`} replace/>} />
                </Routes>
            </FlexFlow>
        </Container>
    );
};

export default ProjectPanel;
