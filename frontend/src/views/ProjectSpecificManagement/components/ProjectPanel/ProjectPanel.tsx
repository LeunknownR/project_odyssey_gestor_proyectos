import { useState, useEffect } from "react";
import { SUBMODULES_VIEWS } from "./constants";
import { Route, Routes } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import { PanelTabProps } from "../../types";
import { FlexFlow } from "src/components/styles";
import { ProjectDetailsForPanel } from "src/entities/project/entities";
import { requestGetProjectDetailForPanel } from "src/services/projects/relatedToProjects";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";

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
            <ProjectTitle name={projectDetails.name} state={projectDetails.state}/>}
            <FlexFlow  width="100%" direction="column">
                <Tabs />
                <Routes>
                    {SUBMODULES_VIEWS.map(({ key, path, View }) => (
                        <Route
                            key={key}
                            path={path}
                            element={<View preloader={preloader} projectId={projectId} />}
                        />
                    ))}
                </Routes>
                {/* <Preloader {...preloader.value} /> */}
            </FlexFlow>
        </FlexFlow>
    );
};

export default ProjectPanel;
