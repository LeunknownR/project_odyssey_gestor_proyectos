import { ModalProps } from "src/components/Modal/types";

export type DeleteTaskModalProps = {
    modalProps: ModalProps;
    deleteTask: () => void;
};