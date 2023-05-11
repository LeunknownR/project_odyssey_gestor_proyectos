import { Icon } from "@iconify/react";
import { Column, Row } from "src/components/styles";
import { IconContainer, Legend, Title } from "./styles";

const FormHeader = () => {
    return (
        <Row justify="center" align="center" gap="10px">
            <IconContainer><Icon icon="game-icons:ancient-sword" /></IconContainer>
            <Column>
                <Title>ProjectOdyssey</Title>
                <Legend>Rise to Challenges</Legend>
            </Column>
        </Row>
    );
};

export default FormHeader;
