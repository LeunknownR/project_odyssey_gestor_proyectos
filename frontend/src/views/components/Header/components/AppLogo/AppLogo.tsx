import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "src/components/styles";
import { IconContainer, Title } from "./styles";

const AppLogo = () => {
    return (
        <Row align="center" gap="5px">
            <IconContainer>
                <Icon icon="game-icons:ancient-sword" />
            </IconContainer>
            <Title>ProjectOdyssey</Title>
        </Row>
    );
};

export default AppLogo;
