import { useState, useEffect } from "react";
import { PasswordTextField } from "../../styles";
import { BUTTON_PROPS, TEXT_FIELD_PROPS } from "../../utils/constants";
import ContentRequirements from "../ContentRequirements";
import { NewPasswordWrapper, UpdateButton } from "./styles";
import { PasswordValidationsTypes, SecondPartModalProps } from "./types";
import {
    INITIAL_PASSWORD_VALIDATIONS,
    PASSWORD_CONDITIONS,
} from "./utils/constants";

const SecondPartModal = ({
    newPassword,
    confirmPassword,
    handlePasswords,
    passwordFieldDisable,
    passwordFieldError,
    openConfirmationModal,
}: SecondPartModalProps) => {
    const [passwordValidations, setPasswordValidations] =
        useState<PasswordValidationsTypes>({ ...INITIAL_PASSWORD_VALIDATIONS });
    useEffect(() => {
        validatePassword();
    }, [newPassword]);
    const enableUpdateButton = (): boolean => {
        if (!newPassword.trim() || !confirmPassword.trim()) return true;
        if (Object.values(passwordValidations).includes(false)) return true;
        // if (newPassword !== confirmPassword) return true;
        return false;
    };
    const validatePassword = (): void => {
        setPasswordValidations({
            minLength: newPassword.length >= PASSWORD_CONDITIONS.minLength,
            containsNumber:
                PASSWORD_CONDITIONS.containsNumber.test(newPassword),
            containsMinus:
                PASSWORD_CONDITIONS.containsLowercase.test(newPassword),
            containsMayus:
                PASSWORD_CONDITIONS.containsUppercase.test(newPassword),
        });
    };
    return (
        <>
        <NewPasswordWrapper>
            <PasswordTextField
                {...TEXT_FIELD_PROPS.NEW_PASS}
                value={newPassword}
                onChange={handlePasswords}
                disabled={passwordFieldDisable.newPassword}
            />
            <ContentRequirements
                passwordValidations={passwordValidations}
            />
        </NewPasswordWrapper>
        <PasswordTextField
            {...TEXT_FIELD_PROPS.CONFIRM_PASS}
            value={confirmPassword}
            onChange={handlePasswords}
            disabled={!newPassword}
            error={passwordFieldError}
        />
        <UpdateButton
            {...BUTTON_PROPS.UPDATE_PASS}
            onClick={openConfirmationModal}
            disabled={enableUpdateButton()}
        />
        </>
    );
};

export default SecondPartModal;
