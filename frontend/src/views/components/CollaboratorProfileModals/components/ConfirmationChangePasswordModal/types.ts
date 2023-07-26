import { ModalProps } from "src/components/Modal/types";

export type ConfirmationChangePasswordModalProps = {
    modalProps: ModalProps;
    changePassword: () => Promise<void>;
};