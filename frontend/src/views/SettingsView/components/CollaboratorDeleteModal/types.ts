import { ReactNode } from "react";
import { ModalProps } from "src/components/Modal/types";

export type DeleteCollaboratorModalProps = {
    modalProps: ModalProps;
    title: string;
    description: string | ReactNode;
    children: ReactNode;
};