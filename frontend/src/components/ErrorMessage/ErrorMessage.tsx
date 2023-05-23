//#region Libraries
//#endregion
//#region Styles
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, ErrorLabel, IconContainer } from "./styles";
import { ErrorMessageProps } from "./types";
//#endregion
//#region Types
//#endregion

const ErrorMessage = ({ text, textAlign }: ErrorMessageProps) => {
    if (!text) return null;
    return (
        <Container>
            <IconContainer><Icon icon="clarity:error-solid" /></IconContainer>
            <ErrorLabel textAlign={textAlign}>{text}</ErrorLabel>
        </Container>
    );
};

export default ErrorMessage;
