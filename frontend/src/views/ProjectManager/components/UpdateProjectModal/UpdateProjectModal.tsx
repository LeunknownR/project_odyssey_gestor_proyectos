import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import { Column, Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Left, Right, Title } from "./styles";
import ProjectFormComponent from "./components/ProjectFormComponent/ProjectFormComponent";
import Footer from "./components/Footer/Footer";
import { CloseButtonProjectForm } from "../../styles";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import { requestUpdateProject } from "src/services/projects/relatedToProjects";
import LeaderSelector from "../NewProjectSection/components/NewProjectModal/components/LeaderSelector/LeaderSelector";
import { UpdateProjectModalProps } from "./types";
import { ProjectForm } from "src/entities/project/types";
import { CardVariant } from "src/components/NotificationCard/types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import FormSection from "./components/FormSection/FormSection";
import LeaderSelectionSection from "./components/LeaderSelectionSection/LeaderSelectionSection";

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
        notificationCard.changeVariant(CardVariant.UpdateProject);
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
            <Row width="100%">
                {isMobile ? (
                    views[tabIdx] || views[0]
                ) : views }
            </Row>
            {/* <Row width="100%">
                <Left>
                    <Column width="80%" alignSelf="center" gap="40px">
                        <Title>Actualizar Proyecto</Title>
                        <ProjectFormComponent form={form} />
                    </Column>
                </Left>
                <Right>
                    <CloseButtonProjectForm
                        onClick={() => modalProps.open(false)}
                        className="update"
                    >
                        <Icon icon="material-symbols:close" />
                    </CloseButtonProjectForm>
                    <Column width="80%" alignSelf="center" gap="35px">
                        <ProjectInfo form={form} variant="update" />
                        <Column width="85%" alignSelf="center" gap="100px">
                            <LeaderSelector
                                currentLeader={currentProject?.leader}
                                form={form}
                                modalProps={modalProps}
                                variant="secondary"
                                preloader={preloader}
                            />
                            <Footer
                                form={form}
                                updateProject={updateProject}
                            />
                        </Column>
                    </Column>
                </Right>
            </Row> */}
        </Modal>
    );
};

export default UpdateProjectModal;
