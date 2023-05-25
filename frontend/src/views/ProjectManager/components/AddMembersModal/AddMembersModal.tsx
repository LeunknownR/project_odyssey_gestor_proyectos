import Modal from "src/components/Modal/Modal";
import { AddMembersChangesModalProps } from "./types";
import {
    BodyWrapper,
    IconContainer,
    IconText,
    NewMemberIcon,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";

const testModalStyles = {
    padding: "0px",
    minWidth: "600px",
};
const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "asdasd",
    },
];
const AddMembersModal = ({ modalProps }: AddMembersChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Header />
            <BodyWrapper>
                {/* <CustomInputSearch
                    label="Miembros del proyecto"
                    placeholder="Ejm: Ral"
                    variant="primary-search"
                    options={PROVISIONAL_OPTIONS}
                    onChange={() => console.log()}
                    // fillOptions={() => console.log()}
                /> */}
                <NewMemberIcon>
                    <IconContainer>
                        <Icon icon="mdi:user-add" />
                    </IconContainer>
                    <IconText>Elija un nuevo miembro para el proyecto</IconText>
                </NewMemberIcon>
            </BodyWrapper>
            <Footer />
        </Modal>
    );
};

export default AddMembersModal;
