import { ChangeEvent } from "react";
import { FormSectionTitle, FormTextField } from "../../styles";
import { Container, TextFieldsWrapper } from "./styles";
import { TEXT_FIELD_PROPS } from "../../utils/constants";
import { UserDataFormProps } from "./types";

const UserDataForm = ({ form }: UserDataFormProps) => {
    const { collaboratorUsername, collaboratorPassword } = form.value;
    const changeCollaboratorUsername = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.COLLABORATOR_USER.name, value);
    };
    const changeCollaboratorPassword = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.COLLABORATOR_PASSWORD.name, value);
    };
    return (
        <Container direction="column" gap="20px">
            <FormSectionTitle>Datos del usuario</FormSectionTitle>
            <TextFieldsWrapper gap="18px">
                <FormTextField
                    {...TEXT_FIELD_PROPS.COLLABORATOR_USER}
                    value={collaboratorUsername}
                    onChange={changeCollaboratorUsername}
                    error={form.errors.value.collaboratorUsername}
                />
                <FormTextField
                    {...TEXT_FIELD_PROPS.COLLABORATOR_PASSWORD}
                    value={collaboratorPassword}
                    onChange={changeCollaboratorPassword}
                    error={form.errors.value.collaboratorPassword}
                />
            </TextFieldsWrapper>
        </Container>
    );
};

export default UserDataForm;
