import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type UpdateEndDateModalProps = {
    modalProps: ModalProps;
    projectId: number;
    currentEndDate: number;
    preloader: PreloaderHook;
    fillProjectDetails: () => Promise<void>;
};
