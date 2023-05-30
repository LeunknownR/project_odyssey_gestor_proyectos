import Modal from "src/components/Modal/Modal";
import { NewProjectModalProps } from "./types";
import { Row } from "src/components/styles";
import { requestCreateProject } from "src/services/projects/relatedToProjects";
import { ProjectForm } from "src/entities/project/types";
import { CardVariant } from "src/components/NotificationCard/types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { useState } from "react";
import FormSection from "./components/FormSection/FormSection";
import LeaderSelectionSection from "./components/LeaderSelectionSection/LeaderSelectionSection";

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
        // Error controlado
        // const { message } = data;
        // Exitoso
        modalProps.open(false);
        fillProjects();
        notificationCard.changeVariant(CardVariant.CreateProject);
        notificationCard.show();
    };
    // const getTabActive = (idx: number) => {
    //     const classList = [];
    //     tabIdx === idx && classList.push("active-tab");
    //     return classList.join(" ");
    // };
    const toPage = (idx: number) => setTabIdx(idx);
    const views = [
        <FormSection key={0} form={form} toPage={toPage}/>,
        <LeaderSelectionSection
            key={1}
            form={form}
            modalProps={modalProps}
            preloader={preloader}
            registerProject={registerProject}
            toPage={toPage}
        />,
    ];
    return (
        <Modal {...modalProps} sizeProps={MODAL_STYLES}>
            <Row width="100%">
                {isMobile ? (
                    views[tabIdx] || views[0]
                ) : views }
            </Row>
        </Modal>
    );
};

export default NewProjectModal;
