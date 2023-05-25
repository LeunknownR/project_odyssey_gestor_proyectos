import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { FormProjectHook } from "src/views/ProjectManager/types";

export type LeaderSelectorProps = {
    form: FormProjectHook;
    modalProps: ModalProps;
    variant: string;
    preloader: PreloaderHook;
};
