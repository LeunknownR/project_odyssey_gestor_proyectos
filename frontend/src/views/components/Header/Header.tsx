import { Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TynpuLogo, User } from "./styles";
import SystemLogo from "./components/SystemLogo/SystemLogo";
import MainLogo from "src/images/main-logo.png"
import CustomTextFieldSearch from "src/components/CustomTextFieldSearch/CustomTextFieldSearch";
import SavedChangesModal from "src/views/ProjectManager/components/SavedChangesModal/SavedChangesModal";
import useModal from "src/components/Modal/utils/hooks/useModal";

const Header = () => {
    const savedChangesModal = useModal();
    return (
        <>
        <Container>
            <Row align="center" gap="20px">
                <IconContainer><Icon icon="iconamoon:menu-burger-horizontal" /></IconContainer>
                <SystemLogo />
            </Row>
            <CustomTextFieldSearch changeField={() => {console.log("GNOMO")}} variant="primary-search"/>
            <Row align="center" gap="50px">
                <TynpuLogo src={MainLogo} />
                <User onClick={() => savedChangesModal.handleOpen(true)}>DC</User>
            </Row>
        </Container>
        <SavedChangesModal modalProps={savedChangesModal}/>
        </>
    );
};

export default Header;
