import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import { NewProjectModalProps } from "./types";
import { requestCreateProject } from "src/services/projects/relatedToProjects";
import { CardVariant } from "src/components/NotificationCard/types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import FormSection from "./components/FormSection/FormSection";
import LeaderSelectionSection from "./components/LeaderSelectionSection/LeaderSelectionSection";
import { FlexFlow } from "src/components/styles";
import { ProjectForm } from "src/entities/project/entities";

const MODAL_STYLES = {
    padding: "0",
    borderRadius: "0",
    maxWidth: "1100px",
};

const NewProjectModal = ({
    preloader,
    modalProps,
    form,
    getProjectFromForm,
    fillProjects,
    notificationCard,
}: NewProjectModalProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const registerProject = async () => {
        const projectForm: ProjectForm | null = getProjectFromForm();
        if (!projectForm) return;
        preloader.show("Creando proyecto...");
        const data = await requestCreateProject(projectForm);
        preloader.hide();
        // Error inesperado
        if (!data) return;
        // Exitoso
        modalProps.open(false);
        fillProjects();
        notificationCard.changeVariant(CardVariant.CreateProject);
        notificationCard.show();
    };
    const toPage = (idx: number) => setTabIdx(idx);
    const views = [
        <FormSection key={0} form={form} tabIdx={tabIdx} toPage={toPage}/>,
        <LeaderSelectionSection
            key={1}
            form={form}
            modalProps={modalProps}
            preloader={preloader}
            registerProject={registerProject}
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

export default NewProjectModal;
