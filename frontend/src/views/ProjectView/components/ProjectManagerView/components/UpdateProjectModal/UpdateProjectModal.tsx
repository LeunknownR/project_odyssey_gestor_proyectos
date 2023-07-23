import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import { FlexFlow } from "src/components/styles";
import { requestUpdateProject } from "src/services/projects/relatedToProjects";
import { UpdateProjectModalProps } from "./types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import FormSection from "./components/FormSection/FormSection";
import LeaderSelectionSection from "./components/LeaderSelectionSection/LeaderSelectionSection";
import { ProjectForm } from "src/entities/project/entities";
import { UPDATE_PROJECT_APPEARANCE } from "./utils/constants";

const MODAL_STYLES = {
    padding: "0",
    borderRadius: "0",
    maxWidth: "1100px",
};

const UpdateProjectModal = ({
    modalProps,
    currentProject, form,
    getProjectFromForm,
    fillProjects,
    preloader,
    notificationCard,
}: UpdateProjectModalProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const updateProject = async () => {
        const projectForm: ProjectForm | null = getProjectFromForm();
        if (!projectForm) return;
        preloader.show("Actualizando datos del proyecto...");
        const data = await requestUpdateProject(projectForm);
        preloader.hide();
        if (!data) return;
        // const { message } = data;
        modalProps.open(false);
        fillProjects();
        notificationCard.changeAppearance(UPDATE_PROJECT_APPEARANCE);
        notificationCard.show();
    };
    const toPage = (idx: number) => setTabIdx(idx);
    const views = [
        <FormSection key={0} form={form} tabIdx={tabIdx} toPage={toPage}/>,
        <LeaderSelectionSection
            key={1}
            form={form}
            currentLeader={currentProject?.leader}
            modalProps={modalProps}
            preloader={preloader}
            updateProject={updateProject}
            tabIdx={tabIdx}
            toPage={toPage}
        />,
    ];
    return (
        <Modal {...modalProps} sizeProps={MODAL_STYLES}>
            <FlexFlow width="100%">
                {isMobile ? (
                    views[tabIdx] || views[0]
                ) : views }
            </FlexFlow>
        </Modal>
    );
};

export default UpdateProjectModal;
