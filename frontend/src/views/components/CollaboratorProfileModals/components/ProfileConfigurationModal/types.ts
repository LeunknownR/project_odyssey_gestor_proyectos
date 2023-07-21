import { ReactNode } from "react";
import { ModalProps } from "src/components/Modal/types";

export type ProfileConfigurationModalProps = {
    modalProps: ModalProps;
    openChangePasswordModal: () => void;
};