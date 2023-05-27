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

const MODAL_STYLES = {
    padding: "0",
    borderRadius: "0",
    maxWidth: "1100px",
};

const UpdateProjectModal = ({
    modalProps,
    form,
    getProjectFromForm,
    fillProjects,
    preloader,
    notificationCard
}: UpdateProjectModalProps) => {
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
        notificationCard.show()
    };
    return (
        <Modal {...modalProps} sizeProps={MODAL_STYLES}>
            <Row width="100%">
                <Left>
                    <Column width="80%" alignSelf="center" gap="40px">
                        <Title>Actualizar Proyecto</Title>
                        <ProjectFormComponent form={form} />
                    </Column>
                </Left>
                <Right>
                    <CloseButtonProjectForm
                        onClick={() => modalProps.open(false)}
                        className="update">
                        <Icon icon="material-symbols:close" />
                    </CloseButtonProjectForm>
                    <Column width="80%" alignSelf="center" gap="35px">
                        <ProjectInfo form={form} variant="update" />
                        <Column width="85%" alignSelf="center" gap="100px">
                            <LeaderSelector
                                form={form}
                                modalProps={modalProps}
                                variant="secondary"
                                preloader={preloader}/>
                            <Footer updateProject={updateProject} />
                        </Column>
                    </Column>
                </Right>
            </Row>
        </Modal>
    );
};

export default UpdateProjectModal;
