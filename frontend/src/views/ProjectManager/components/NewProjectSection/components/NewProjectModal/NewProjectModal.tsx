import Modal from "src/components/Modal/Modal";
import { NewProjectModalProps } from "./types";
import { Left, Right, Title } from "./styles";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import Footer from "./components/Footer/Footer";
import { Column, Row } from "src/components/styles";
import { CloseButtonProjectForm } from "src/views/ProjectManager/styles";
import { Icon } from "@iconify/react/dist/iconify.js";

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

const NewProjectModal = ({ modalProps }: NewProjectModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Row width="100%">
                <Left>
                    <Column width="80%" alignSelf="center" gap="40px">
                        <Title>Nuevo Proyecto</Title>
                        <ProjectForm />
                    </Column>
                </Left>
                <Right>
                    <CloseButtonProjectForm onClick={() => modalProps.handleOpen(false)}>
                        <Icon icon="material-symbols:close" />
                    </CloseButtonProjectForm>
                    <Column width="80%" alignSelf="center" gap="35px">
                        <ProjectInfo />
                        <Column width="85%" alignSelf="center" gap="100px">
                            <CustomInputSearch
                                label="Líder del proyecto"
                                placeholder="Ejm: Ral"
                                variant="primary-search"
                                options={PROV_OP}
                                onChange={() => console.log()}
                                fillOptions={() => console.log()}
                            />
                            <Footer />
                        </Column>
                    </Column>
                </Right>
            </Row>
        </Modal>
    );
};

export default NewProjectModal;
