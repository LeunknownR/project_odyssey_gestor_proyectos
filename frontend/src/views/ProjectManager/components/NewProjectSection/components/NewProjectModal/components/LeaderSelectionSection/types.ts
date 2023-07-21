import { ModalProps } from "src/components/Modal/types"
import { PreloaderHook } from "src/components/Preloader/types";
import { FormProjectHook } from "src/views/ProjectManager/types";

export type LeaderSelectionSectionProps = {
    modalProps: ModalProps,
    form: FormProjectHook, 
    preloader: PreloaderHook, 
    registerProject: () => Promise<void>;
    tabIdx: number;
    toPage: (idx: number) => void
}