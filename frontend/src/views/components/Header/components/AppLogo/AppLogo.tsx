import { Icon } from "@iconify/react/dist/iconify.js";
import { FlexFlow } from "src/components/styles";
import { IconContainer, Title } from "./styles";

const AppLogo = () => {
    return (
        <FlexFlow align="center" gap="5px">
            <IconContainer>
                <Icon icon="game-icons:ancient-sword" />
            </IconContainer>
            <Title>ProjectOdyssey</Title>
        </FlexFlow>
    );
};

export default AppLogo;
