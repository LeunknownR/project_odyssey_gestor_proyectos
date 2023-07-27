import { useEffect, useState } from "react";
import {
    ChangePasswordModalProps,
    PasswordFieldDisableProps,
    PasswordFieldProps,
} from "./types";
import { CustomModal } from "./styles";
import {
    INIT_PASSWORD_FIELD,
    INIT_PASSWORD_FIELD_DISABLE,
    INIT_PASSWORD_FIELD_ERRORS,
    INVALID_PASSWORD,
} from "./utils/constants";
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
import EndedSessionModal from "../../../EndedSessionModal";
import FirstPartModal from "./components/FirstPartModal";
import SecondPartModal from "./components/SecondPartModal";
import { clearStorage } from "src/storage";

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
    const { isMobile } = useMainContext();
    //#region Modals
    const confirmationChangePassModal = useModal();
    const confirmCloseModal = useModal();
    const endedSessionModal = useModal();
    useEffect(() => {
        if (!modalProps.isOpen) return;
        setPasswordField(INIT_PASSWORD_FIELD);
        setPasswordFieldDisable(INIT_PASSWORD_FIELD_DISABLE);
        setPasswordFieldError(INIT_PASSWORD_FIELD_ERRORS);
    }, [modalProps.isOpen]);
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
        changeDisableInput("verifyButton", true);
        moveTab(1);
    };
    const changePassword = async (): Promise<void> => {
        if (!currentCollaborator) return;
        await requestChangePassword({
            collaboratorId: currentCollaborator.id,
            newPassword: passwordField.newPassword,
        });
        modalProps.open(false);
        confirmationChangePassModal.open(false);
        clearStorage();
        endedSessionModal.open(true);
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
    const openConfirmCloseModal = (): void => confirmCloseModal.open(true);
    const closeModalAfterVerify = (): void => {
        modalProps.open(false);
        confirmCloseModal.open(false);
    };
    const tabs = [
        <FirstPartModal
            key={0}
            verifyPassword={verifyPassword}
            actualPassword={passwordField.actualPassword}
            handlePasswords={handlePasswords}
            passwordFieldDisable={passwordFieldDisable}
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
        <CustomModal
            {...modalProps}
            handleClose={
                passwordFieldDisable.verifyButton
                    ? openConfirmCloseModal
                    : null
            }
            sizeProps={MODAL_STYLES}
        >
            <ModalHeader modalProps={modalProps} />
            {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
        </CustomModal>
        <ConfirmationChangePasswordModal
            modalProps={confirmationChangePassModal}
            changePassword={changePassword}
        />
        <ConfirmCloseModal
            modalProps={confirmCloseModal}
            closeModalAfterVerify={closeModalAfterVerify}
        />
        <EndedSessionModal
            modalProps={endedSessionModal}
            content="Ha cambiado su contraseña correctamente, tiene que volver a iniciar sesión"
        />
        </>
    );
};

export default ChangePasswordModal;
