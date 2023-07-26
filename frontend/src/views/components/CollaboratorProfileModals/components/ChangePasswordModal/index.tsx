import { useState } from "react";
import {
    ChangePasswordModalProps,
    FirstPartModalProps,
    PasswordFieldDisableProps,
    PasswordFieldProps,
    SecondPartModalProps,
} from "./types";
import {
    CustomModal,
    NewPasswordWrapper,
    ActualPasswordWrapper,
    PasswordTextField,
    UpdateButton,
} from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import { BUTTON_PROPS, TEXT_FIELD_PROPS } from "./utils/constants";
import NotificationInfo from "./components/NotificationInfo";
import ContentRequirements from "./components/ContentRequirements";
import ModalHeader from "./components/ModalHeader";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { requestCheckCredentials } from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { TextInputTarget } from "src/components/CustomTextField/types";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const INIT_PASSWORD_FIELD = {
    actualPassword: "",
    newPassword: "",
    confirmPassword: "",
};
const INIT_PASSWORD_FIELD_DISABLE = {
    actualPassword: false,
    newPassword: true,
    confirmPassword: true,
};
const ChangePasswordModal = ({
    modalProps,
    currentCollaborator,
}: ChangePasswordModalProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const [passwordField, setPasswordField] =
        useState<PasswordFieldProps>(INIT_PASSWORD_FIELD);
    const [passwordFieldDisable, setPasswordFieldDisable] =
        useState<PasswordFieldDisableProps>(INIT_PASSWORD_FIELD_DISABLE);
    const { isMobile } = useMainContext();
    const moveTab = (idx: number) => setTabIdx(idx);
    const verifyPassword = async () => {
        if (!currentCollaborator) return;
        const { message } = await requestCheckCredentials({
            username: currentCollaborator.username,
            password: passwordField.actualPassword,
        });
        if (message !== "SUCCESS") return;
        changeDisableInput("actualPassword", true);
        changeDisableInput("newPassword", false);
        moveTab(1);
    };
    const handlePasswords = ({
        target: { name, value },
    }: TextInputTarget): void => {
        setPasswordField({
            ...passwordField,
            [name]: value,
        });
    };
    const changeDisableInput = (field: string, value: any): void => {
        setPasswordFieldDisable(prev => ({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }));
        // setErrors({ ...INITIAL_ERRORS });
    };
    const tabs = [
        <FirstPartModal
            key={0}
            verifyPassword={verifyPassword}
            actualPassword={passwordField.actualPassword}
            handlePasswords={handlePasswords}
            passwordFieldDisable={passwordFieldDisable}
            changeDisableInput={changeDisableInput}
        />,
        <SecondPartModal
            key={1}
            confirmPassword={passwordField.confirmPassword}
            newPassword={passwordField.newPassword}
            handlePasswords={handlePasswords}
            passwordFieldDisable={passwordFieldDisable}
            changeDisableInput={changeDisableInput}
        />,
    ];
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
        </CustomModal>
    );
};

export default ChangePasswordModal;

const FirstPartModal = ({
    verifyPassword,
    actualPassword,
    handlePasswords,
    passwordFieldDisable,
    changeDisableInput,
}: FirstPartModalProps) => {
    return (
        <>
            <NotificationInfo />
            <ActualPasswordWrapper>
                <PasswordTextField
                    {...TEXT_FIELD_PROPS.ACTUAL_PASS}
                    value={actualPassword}
                    onChange={handlePasswords}
                    disabled={passwordFieldDisable.actualPassword}
                />
                <CustomButton
                    {...BUTTON_PROPS.VERIFY_PASS}
                    onClick={verifyPassword}
                    disabled={!actualPassword}
                />
            </ActualPasswordWrapper>
        </>
    );
};

const SecondPartModal = ({
    newPassword,
    confirmPassword,
    handlePasswords,
    passwordFieldDisable,
    changeDisableInput,
}: SecondPartModalProps) => {
    return (
        <>
            <NewPasswordWrapper>
                <PasswordTextField
                    {...TEXT_FIELD_PROPS.NEW_PASS}
                    value={newPassword}
                    onChange={handlePasswords}
                    disabled={passwordFieldDisable.newPassword}
                />
                <ContentRequirements />
            </NewPasswordWrapper>
            <PasswordTextField
                {...TEXT_FIELD_PROPS.CONFIRM_PASS}
                value={confirmPassword}
                onChange={handlePasswords}
                disabled={!newPassword}
            />
            <UpdateButton
                {...BUTTON_PROPS.UPDATE_PASS}
                onClick={() => console.log("dx")}
                disabled={confirmPassword !== newPassword}
            />
        </>
    );
};
