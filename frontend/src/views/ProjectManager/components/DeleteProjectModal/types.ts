import { ModalProps } from "src/components/Modal/types";

export type DeleteProjectModalProps = {
    // preloader: Preloder 
    modalProps: ModalProps;
    projectId?: number;
    fillProjects: () => Promise<void>;
};
