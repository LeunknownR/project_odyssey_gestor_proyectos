import { useState } from "react";
import {
    ChangePasswordModalProps,
    FirstPartModalProps,
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

const ChangePasswordModal = ({
    modalProps,
    currentCollaborator,
}: ChangePasswordModalProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const [passwordField, setPasswordField] =
        useState<PasswordFieldProps>(INIT_PASSWORD_FIELD);
    const { isMobile } = useMainContext();
    const moveTab = (idx: number) => setTabIdx(idx);
    const verifyPassword = async () => {
        if (!currentCollaborator) return;
        await requestCheckCredentials({
            username: currentCollaborator.username,
            password: passwordField.actualPassword,
        });
        moveTab(1);
    };
    const handlePasswords = ({ target: { name, value } }: TextInputTarget): void => {
        setPasswordField({
            ...passwordField,
            [name]: value,
        });
    };
    const tabs = [
        <FirstPartModal
            key={0}
            verifyPassword={verifyPassword}
            actualPassword={passwordField.actualPassword}
            handlePasswords={handlePasswords}
        />,
        <SecondPartModal
            key={1}
            confirmPassword={passwordField.confirmPassword}
            newPassword={passwordField.newPassword}
            handlePasswords={handlePasswords}
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
    handlePasswords
}: FirstPartModalProps) => {
    return (
        <>
        <NotificationInfo />
        <ActualPasswordWrapper>
            <PasswordTextField
                {...TEXT_FIELD_PROPS.ACTUAL_PASS}
                value={actualPassword}
                onChange={handlePasswords}
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
    handlePasswords
}: SecondPartModalProps) => {
    return (
        <>
        <NewPasswordWrapper>
            <PasswordTextField
                {...TEXT_FIELD_PROPS.NEW_PASS}
                value={newPassword}
                onChange={handlePasswords}
            />
            <ContentRequirements />
        </NewPasswordWrapper>
        <PasswordTextField
            {...TEXT_FIELD_PROPS.CONFIRM_PASS}
            value={confirmPassword}
            onChange={handlePasswords}
        />
        <UpdateButton
            {...BUTTON_PROPS.UPDATE_PASS}
            onClick={() => console.log("dx")}
            disabled={confirmPassword !== newPassword}
        />
        </>
    );
};
