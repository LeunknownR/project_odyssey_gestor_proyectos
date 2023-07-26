import { ModalProps } from "src/components/Modal/types";
import { User } from "src/entities/user/types";

export type ProfileConfigurationModalProps = {
    modalProps: ModalProps;
    openChangePasswordModal: () => void;
    currentCollaborator: User | null;
};