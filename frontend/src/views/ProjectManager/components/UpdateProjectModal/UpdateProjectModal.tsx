import Modal from "src/components/Modal/Modal";
import { Column, Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Left, Right, Title } from "./styles";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { UpdateDateModalProps } from "../UpdateDateModal/types";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import Footer from "./components/Footer/Footer";
import { CloseButtonProjectForm } from "../../styles";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import { requestUpdateProject } from "src/services/projects/relatedToProjects";
import LeaderSelector from "../NewProjectSection/components/NewProjectModal/components/LeaderSelector/LeaderSelector";

const testModalStyles = {
    padding: "0",
    borderRadius: "0",
    maxWidth: "1100px",
};
const PROV_OP = [
    {
        id: 1,
        name: "ralf",
    },
];

const UpdateProjectModal = ({
    modalProps,
    form,
    getProjectFromForm,
    fillProjects,
}: UpdateDateModalProps) => {
    const updateProject = async () => {
        console.log("updating");
        // // preloader.show("Actualizando datos de la empresa...");
        // const data = await requestUpdateProject(getProjectFromForm());
        // // preloader.hide();
        // if (!data) return;
        // // const { message } = data;
        // modalProps.open(false);
        // fillProjects();
    };
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Row width="100%">
                <Left>
                    <Column width="80%" alignSelf="center" gap="40px">
                        <Title>Actualizar Proyecto</Title>
                        <ProjectForm form={form} />
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
                                modalProps={modalProps}/>
                            <Footer updateProject={updateProject} />
                        </Column>
                    </Column>
                </Right>
            </Row>
        </Modal>
    );
};

export default UpdateProjectModal;