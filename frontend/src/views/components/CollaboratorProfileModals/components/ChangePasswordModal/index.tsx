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
import {
    BUTTON_PROPS,
    INIT_PASSWORD_FIELD,
    INIT_PASSWORD_FIELD_DISABLE,
    INIT_PASSWORD_FIELD_ERRORS,
    INVALID_PASSWORD,
    TEXT_FIELD_PROPS,
} from "./utils/constants";
import NotificationInfo from "./components/NotificationInfo";
import ContentRequirements from "./components/ContentRequirements";
import ModalHeader from "./components/ModalHeader";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import {
    requestChangePassword,
    requestCheckCredentials,
} from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { TextInputTarget } from "src/components/CustomTextField/types";
import useModal from "src/components/Modal/utils/hooks/useModal";
import ConfirmationChangePasswordModal from "../ConfirmationChangePasswordModal";
import ConfirmCloseModal from "../ConfirmCloseModal";
import SuccessfulPasswordChangeModal from "../SuccessfulPasswordChangeModal";
import { sleep } from "src/services/utils/helpers";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ChangePasswordModal = ({
    modalProps,
    currentCollaborator,
}: ChangePasswordModalProps) => {
    //#region States
    const [tabIdx, setTabIdx] = useState(0);
    const [passwordField, setPasswordField] = useState<PasswordFieldProps>({
        ...INIT_PASSWORD_FIELD,
    });
    const [passwordFieldDisable, setPasswordFieldDisable] =
        useState<PasswordFieldDisableProps>({ ...INIT_PASSWORD_FIELD_DISABLE });
    const [passwordFieldError, setPasswordFieldError] = useState({
        ...INIT_PASSWORD_FIELD_ERRORS,
    });
    //#endregion
    // useEffect(() => {
    //     if (!modalProps.isOpen) noChangePassModal.open(true);
    // }, [modalProps.isOpen]);
    const { isMobile } = useMainContext();
    //#region Modals
    const confirmationChangePassModal = useModal();
    const confirmCloseModal = useModal();
    const successfulPassChangeModal = useModal();
    //#endregion
    const moveTab = (idx: number) => setTabIdx(idx);
    const verifyPassword = async (): Promise<void> => {
        if (!currentCollaborator) return;
        const { message } = await requestCheckCredentials({
            username: currentCollaborator.username,
            password: passwordField.actualPassword,
        });
        if (message !== "SUCCESS") {
            changeErrorField("actualPassword", INVALID_PASSWORD);
            return;
        }
        changeDisableInput("actualPassword", true);
        changeDisableInput("newPassword", false);
        moveTab(1);
    };
    const changePassword = async (): Promise<void> => {
        if (!currentCollaborator) return;
        await requestChangePassword({
            collaboratorId: currentCollaborator.id,
            newPassword: passwordField.newPassword,
        });
        await sleep(200);
        modalProps.open(false);
        confirmationChangePassModal.open(false);
        successfulPassChangeModal.open(true);
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
        setPasswordFieldError({ ...INIT_PASSWORD_FIELD_ERRORS });
    };
    const changeErrorField = (field: string, value: string | null): void => {
        setPasswordFieldError(prev => ({
            ...prev,
            [field]: value,
        }));
    };
    const tabs = [
        <FirstPartModal
            key={0}
            verifyPassword={verifyPassword}
            actualPassword={passwordField.actualPassword}
            handlePasswords={handlePasswords}
            passwordFieldDisable={passwordFieldDisable.actualPassword}
            passwordFieldError={passwordFieldError.actualPassword}
        />,
        <SecondPartModal
            key={1}
            confirmPassword={passwordField.confirmPassword}
            newPassword={passwordField.newPassword}
            handlePasswords={handlePasswords}
            passwordFieldDisable={passwordFieldDisable}
            openConfirmationModal={() => confirmationChangePassModal.open(true)}
        />,
    ];
    return (
        <>
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
        </CustomModal>
        <ConfirmationChangePasswordModal
            modalProps={confirmationChangePassModal}
            changePassword={changePassword}
        />
        <ConfirmCloseModal modalProps={confirmCloseModal} />
        <SuccessfulPasswordChangeModal
            modalProps={successfulPassChangeModal}
        />
        </>
    );
};

export default ChangePasswordModal;

const FirstPartModal = ({
    verifyPassword,
    actualPassword,
    handlePasswords,
    passwordFieldDisable,
    passwordFieldError,
}: FirstPartModalProps) => {
    return (
        <>
        <NotificationInfo />
        <ActualPasswordWrapper>
            <PasswordTextField
                {...TEXT_FIELD_PROPS.ACTUAL_PASS}
                value={actualPassword}
                onChange={handlePasswords}
                disabled={passwordFieldDisable}
                error={passwordFieldError}
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
    openConfirmationModal,
}: SecondPartModalProps) => {
    const enableUpdateButton = (): boolean => {
        if (!newPassword.trim() || !confirmPassword.trim()) return true;
        if (newPassword !== confirmPassword) return true;
        return false;
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
            onClick={openConfirmationModal}
            disabled={enableUpdateButton()}
        />
        </>
    );
};
