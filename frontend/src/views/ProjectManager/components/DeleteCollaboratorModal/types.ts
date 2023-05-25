import { ModalProps } from "src/components/Modal/types";

export type DeleteCollaboratorModalProps = {
    // preloader: Preloder 
    modalProps: ModalProps;
    userId?: number;
    fillCollaborator: () => Promise<void>;
};
