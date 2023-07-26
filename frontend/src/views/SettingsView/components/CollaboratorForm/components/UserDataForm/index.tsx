import { ChangeEvent } from "react";
import { FormSectionTitle, FormTextField } from "../../styles";
import { Container, PasswordWrapper, TextFieldsWrapper } from "./styles";
import { TEXT_FIELD_PROPS } from "../../utils/constants";
import { UserDataFormProps } from "./types";
import CustomCheckbox from "src/components/CustomCheckBox";
import useSettingsViewContext from "src/views/SettingsView/utils/context/useSettingsViewContext";

const UserDataForm = ({ form }: UserDataFormProps) => {
    const { currentCollaborator } = useSettingsViewContext();
    const {
        collaboratorUsername,
        collaboratorPassword,
        toChangeCollaboratorPassword,
    } = form.value;
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
    const toggleChangePassword = () => {
        form.change(
            TEXT_FIELD_PROPS.COLLABORATOR_CHANGE_PASSWORD.name,
            !toChangeCollaboratorPassword
        );
    };
    return (
        <Container direction="column" gap="20px">
            <FormSectionTitle>Datos del usuario</FormSectionTitle>
            <TextFieldsWrapper direction="column" gap="32px" width="60%">
                <FormTextField
                    {...TEXT_FIELD_PROPS.COLLABORATOR_USER}
                    value={collaboratorUsername}
                    onChange={changeCollaboratorUsername}
                    error={form.errors.value.collaboratorUsername}
                />
                <PasswordWrapper direction="column" gap="14px">
                    <FormTextField
                        {...TEXT_FIELD_PROPS.COLLABORATOR_PASSWORD}
                        value={collaboratorPassword}
                        onChange={changeCollaboratorPassword}
                        error={form.errors.value.collaboratorPassword}
                        disabled={!toChangeCollaboratorPassword}
                    />
                    {currentCollaborator && (
                        <CustomCheckbox
                            {...TEXT_FIELD_PROPS.COLLABORATOR_CHANGE_PASSWORD}
                            isChecked={toChangeCollaboratorPassword}
                            onChange={toggleChangePassword}
                        />
                    )}
                </PasswordWrapper>
            </TextFieldsWrapper>
        </Container>
    );
};

export default UserDataForm;
