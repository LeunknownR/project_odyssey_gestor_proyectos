import { FormSectionTitle, FormTextField } from "../../styles";
import { Container, TextFieldsWrapper } from "./styles";
import { TEXT_FIELD_PROPS } from "../../utils/constants";

const UserDataForm = () => {
    return (
        <Container direction="column" gap="20px">
            <FormSectionTitle>Datos del usuario</FormSectionTitle>
            <TextFieldsWrapper gap="18px">
                <FormTextField {...TEXT_FIELD_PROPS.COLLABORATOR_USER} />
                <FormTextField {...TEXT_FIELD_PROPS.COLLABORATOR_PASSWORD} />
            </TextFieldsWrapper>
        </Container>
    );
};

export default UserDataForm;
