import { Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TynpuLogo, User } from "./styles";
import SystemLogo from "./components/SystemLogo/SystemLogo";
import MainLogo from "src/images/main-logo.png";
import CustomTextFieldSearch from "src/components/CustomTextFieldSearch/CustomTextFieldSearch";
import SavedChangesModal from "src/views/ProjectManager/components/SavedChangesModal/SavedChangesModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";

const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "ralf",
    },
];

const Header = () => {
    const savedChangesModal = useModal();
    return (
        <>
        <Container>
            <Row align="center" gap="20px">
                <IconContainer>
                    <Icon icon="iconamoon:menu-burger-horizontal" />
                </IconContainer>
                <SystemLogo />
            </Row>
            <CustomInputSearch
                variant="primary-search"
                options={PROVISIONAL_OPTIONS}
                onChange={() => console.log("gnomo")}
                fillOptions={() => console.log("hola")}
            />
            <Row align="center" gap="50px">
                <TynpuLogo src={MainLogo} />
                <User onClick={() => savedChangesModal.handleOpen(true)}>
                    DC
                </User>
            </Row>
        </Container>
        <SavedChangesModal modalProps={savedChangesModal} />
        </>
    );
};

export default Header;
