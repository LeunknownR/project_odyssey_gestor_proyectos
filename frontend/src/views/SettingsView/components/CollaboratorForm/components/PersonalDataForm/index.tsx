import { FormSectionTitle, FormTextField } from "../../styles";
import { TEXT_FIELD_PROPS } from "../../utils/constants";
import { Container } from "./styles";

const PersonalDataForm = () => {
    return (
        <Container direction="column" gap="18px">
            <FormSectionTitle>Datos personales</FormSectionTitle>
            <FormTextField {...TEXT_FIELD_PROPS.COLLABORATOR_NAME} />
            <FormTextField {...TEXT_FIELD_PROPS.COLLABORATOR_SURNAME} />
            <FormTextField {...TEXT_FIELD_PROPS.COLLABORATOR_EMAIL} />
        </Container>
    );
};

export default PersonalDataForm;
