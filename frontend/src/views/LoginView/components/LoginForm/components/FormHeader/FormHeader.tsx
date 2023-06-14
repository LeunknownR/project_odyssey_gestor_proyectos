import { Icon } from "@iconify/react";
import { FlexFlow } from "src/components/styles";
import { IconContainer, Legend, Title } from "./styles";

const FormHeader = () => {
    return (
        <FlexFlow justify="center" align="center" gap="10px">
            <IconContainer><Icon icon="game-icons:ancient-sword" /></IconContainer>
            <FlexFlow direction="column">
                <Title>ProjectOdyssey</Title>
                <Legend>Rise to Challenges</Legend>
            </FlexFlow>
        </FlexFlow>
    );
};

export default FormHeader;
