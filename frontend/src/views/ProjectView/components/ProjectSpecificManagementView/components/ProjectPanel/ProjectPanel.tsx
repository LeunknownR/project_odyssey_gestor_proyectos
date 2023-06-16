import { useState, useEffect } from "react";
import { SUBMODULES_VIEWS } from "./constants";
import { Navigate, Route, Routes } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import { PanelTabProps } from "../../types";
import { FlexFlow } from "src/components/styles";
import { ProjectDetailsForPanel } from "src/entities/project/entities";
import { requestGetProjectDetailForPanel } from "src/services/projects/relatedToProjects";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";

const MENU_OPTIONS = [{
    text: "Detalles",
    to: "detalles",
    icon: "fa6-solid:diagram-project"
}]
const ProjectPanel = ({ preloader, projectId }: PanelTabProps) => {
    //#region States
    const [projectDetails, setProjectDetails] = useState<ProjectDetailsForPanel | null>(null);
    //#endregion
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
        <FlexFlow 
            direction="column" 
            width="100%" gap="30px">
            {projectDetails && 
            <ProjectTitle name={projectDetails.name} state={projectDetails.state} options={MENU_OPTIONS}/>}
            <FlexFlow  width="100%" direction="column">
                <Tabs projectId={projectId} />
                <Routes>
                    {SUBMODULES_VIEWS.map(({ key, path, View }) => (
                        <Route
                            key={key}
                            path={path}
                            element={<View preloader={preloader} projectId={projectId} />}
                        />
                    ))}
                    <Route path="*" element={<Navigate to={`/proyectos/${projectId}/detalles`} replace/>} />
                </Routes>
            </FlexFlow>
        </FlexFlow>
    );
};

export default ProjectPanel;
