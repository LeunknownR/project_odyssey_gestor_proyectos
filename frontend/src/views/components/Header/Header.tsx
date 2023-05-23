import { Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TynpuLogo } from "./styles";
import SystemLogo from "./components/SystemLogo/SystemLogo";
import MainLogo from "src/images/main-logo.png";
import User from "./components/User/User";

const Header = () => {
    return (
        <Container>
            <Row align="center" gap="20px">
                <IconContainer>
                    <Icon icon="iconamoon:menu-burger-horizontal" />
                </IconContainer>
                <SystemLogo />
            </Row>
            <Row align="center" gap="50px">
                <TynpuLogo src={MainLogo} />
                <User />
            </Row>
        </Container>
    );
};

export default Header;
