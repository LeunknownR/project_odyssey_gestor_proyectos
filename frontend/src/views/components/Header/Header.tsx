import { Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TynpuLogo } from "./styles";
import SystemLogo from "./components/SystemLogo/SystemLogo";
import MainLogo from "src/images/main-logo.png";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import User from "./components/User/User";

const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "ralf",
    },
];

const Header = () => {
    return (
        <Container>
            <Row align="center" gap="20px">
                <IconContainer>
                    <Icon icon="iconamoon:menu-burger-horizontal" />
                </IconContainer>
                <SystemLogo />
            </Row>
            <CustomInputSearch
                variant="header-search"
                options={PROVISIONAL_OPTIONS}
                onChange={() => console.log("gnomo")}
                fillOptions={() => console.log("hola")}
            />
            <Row align="center" gap="50px">
                <TynpuLogo src={MainLogo} />
                <User />
            </Row>
        </Container>
    );
};

export default Header;
