import Modal from "src/components/Modal/Modal";
import { Column, Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Left, Right, Title } from "./styles";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { UpdateDateModalProps } from "../UpdateDateModal/types";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import Footer from "./components/Footer/Footer";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import { CloseButtonProjectForm } from "../../styles";

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

const UpdateProjectModal = ({ modalProps, form }: UpdateDateModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Row width="100%">
                <Left>
                    <Column width="80%" alignSelf="center" gap="40px">
                        <Title>Actualizar Proyecto</Title>
                        <ProjectForm form={form}/>
                    </Column>
                </Left>
                <Right>
                    <CloseButtonProjectForm className="update">
                        <Icon icon="material-symbols:close" />
                    </CloseButtonProjectForm>
                    <Column width="80%" alignSelf="center" gap="35px">
                        <ProjectInfo />
                        <Column width="85%" alignSelf="center" gap="100px">
                            <CustomInputSearch
                                label="Líder del proyecto"
                                placeholder="Ejm: Ral"
                                variant="secondary-search"
                                options={PROV_OP}
                                onChange={() => console.log()}
                                fillOptions={() => console.log()}
                            />
                            <Footer/>
                        </Column>
                    </Column>
                </Right>
            </Row>
        </Modal>
    );
};

export default UpdateProjectModal;
