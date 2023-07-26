import { ChangeEvent } from "react";
import { FormSectionTitle, FormTextField } from "../../styles";
import { TEXT_FIELD_PROPS } from "../../utils/constants";
import { Container } from "./styles";
import { PersonalDataFormProps } from "./types";

const PersonalDataForm = ({ form }: PersonalDataFormProps) => {
    const { collaboratorName, collaboratorSurname, collaboratorEmail } =
        form.value;
    const changeCollaboratorName = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.COLLABORATOR_NAME.name, value);
    };
    const changeCollaboratorSurname = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.COLLABORATOR_SURNAME.name, value);
    };
    const changeCollaboratorEmail = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.COLLABORATOR_EMAIL.name, value);
    };
    return (
        <Container direction="column" gap="18px">
            <FormSectionTitle>Datos personales</FormSectionTitle>
            <FormTextField
                {...TEXT_FIELD_PROPS.COLLABORATOR_NAME}
                value={collaboratorName}
                onChange={changeCollaboratorName}
            />
            <FormTextField
                {...TEXT_FIELD_PROPS.COLLABORATOR_SURNAME}
                value={collaboratorSurname}
                onChange={changeCollaboratorSurname}
            />
            <FormTextField
                {...TEXT_FIELD_PROPS.COLLABORATOR_EMAIL}
                value={collaboratorEmail}
                onChange={changeCollaboratorEmail}
                error={form.errors.value.collaboratorEmail}
            />
        </Container>
    );
};

export default PersonalDataForm;
