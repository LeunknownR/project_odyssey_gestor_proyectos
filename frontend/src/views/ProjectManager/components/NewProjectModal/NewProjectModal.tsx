import Modal from "src/components/Modal/Modal";
import { NewProjectModalProps } from "./types";
import { CloseBtn, Left, Right, Title } from "./styles";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import Footer from "./components/Footer/Footer";
import { Column, Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const testModalStyles = {
    padding: "0",
    borderRadius: "0",
    maxWidth: "1100px"
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
                        <NewProjectForm />
                    </Column>
                </Left>
                <Right>
                    <CloseBtn><Icon icon="material-symbols:close" /></CloseBtn>
                    <Column width="80%" alignSelf="center" gap="35px">
                        <ProjectInfo />
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
                </Right>
            </Row>
        </Modal>
    );
};

export default NewProjectModal;
