import { useEffect, useState } from "react";
import {
    ChangePasswordModalProps,
    PasswordFieldDisableProps,
    PasswordFieldProps,
} from "./types";
import { CustomModal } from "./styles";
import {
    ERROR_TEXTS_AFTER_REQUEST,
    INIT_PASSWORD_FIELD,
    INIT_PASSWORD_FIELD_DISABLE,
    INIT_PASSWORD_FIELD_ERRORS,
} from "./utils/constants";
import ModalHeader from "./components/ModalHeader";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import {
    requestChangePassword,
    requestCheckCredentials,
} from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { TextInputTarget } from "src/components/CustomTextField/types";
import useModal from "src/components/Modal/utils/hooks/useModal";
import ConfirmChangePasswordModal from "../ConfirmationChangePasswordModal";
import ConfirmClosureModal from "../ConfirmClosureModal";
import FirstPartModal from "./components/FirstPartModal";
import SecondPartModal from "./components/SecondPartModal";
import { clearStorage } from "src/storage";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ChangePasswordModal = ({
    modalProps,
    currentCollaborator,
}: ChangePasswordModalProps) => {
    const { isMobile } = useMainContext();
    const { openEndedSessionModal } = useMasterRouterContext();
    //#region States
    const [tabIdx, setTabIdx] = useState(0);
    const [passwordField, setPasswordField] = useState<PasswordFieldProps>({
        ...INIT_PASSWORD_FIELD,
    });
    const [passwordFieldDisable, setPasswordFieldDisable] = useState<PasswordFieldDisableProps>({ ...INIT_PASSWORD_FIELD_DISABLE });
    const [passwordFieldError, setPasswordFieldError] = useState({
        ...INIT_PASSWORD_FIELD_ERRORS,
    });
    //#endregion
    //#region Modals
    const confirmChangePassModal = useModal();
    const confirmClosureModal = useModal();
    useEffect(() => {
        if (!modalProps.isOpen) return;
        setPasswordField(INIT_PASSWORD_FIELD);
        setPasswordFieldDisable(INIT_PASSWORD_FIELD_DISABLE);
        setPasswordFieldError(INIT_PASSWORD_FIELD_ERRORS);
    }, [modalProps.isOpen]);
    //#endregion
    const moveTab = (idx: number) => setTabIdx(idx);
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
    const verifyPassword = async (): Promise<void> => {
        if (!currentCollaborator) return;
        const { message } = await requestCheckCredentials({
            username: currentCollaborator.username,
            password: passwordField.actualPassword,
        });
        if (message !== "SUCCESS") {
            changeErrorField("actualPassword", ERROR_TEXTS_AFTER_REQUEST.INVALID_PASSWORD);
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
        confirmChangePassModal.open(false);
        clearStorage();
        openEndedSessionModal("Ha cambiado su contraseña correctamente, tiene que volver a iniciar sesión");
    };
    const openConfirmChangePasswordModal = (): void => {
        const {newPassword, confirmPassword} = passwordField;
        if (newPassword !== confirmPassword) {
            changeErrorField("confirmPassword", ERROR_TEXTS_AFTER_REQUEST.PASSWORD_NOT_MATCHED);
            return;
        }
        confirmChangePassModal.open(true)
    }
    const openConfirmClosureModal = (): void => confirmClosureModal.open(true);
    const closeModalAfterVerify = (): void => {
        modalProps.open(false);
        confirmClosureModal.open(false);
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
            passwordFieldError={passwordFieldError.confirmPassword}
            openConfirmationModal={openConfirmChangePasswordModal}
        />,
    ];
    return (
        <>
        <CustomModal
            {...modalProps}
            handleClose={
                passwordFieldDisable.verifyButton
                    ? openConfirmClosureModal
                    : null
            }
            sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
        </CustomModal>
        <ConfirmChangePasswordModal
            modalProps={confirmChangePassModal}
            changePassword={changePassword}
        />
        <ConfirmClosureModal
            modalProps={confirmClosureModal}
            closeModalAfterVerify={closeModalAfterVerify}
        />
        </>
    );
};

export default ChangePasswordModal;
