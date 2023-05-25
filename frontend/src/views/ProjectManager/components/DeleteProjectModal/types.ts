import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type DeleteProjectModalProps = {
    preloader: PreloaderHook 
    modalProps: ModalProps;
    projectId?: number;
    fillProjects: () => Promise<void>;
};
