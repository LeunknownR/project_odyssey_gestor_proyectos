import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type DeleteCollaboratorModalProps = {
    preloader: PreloaderHook
    modalProps: ModalProps;
    fillCollaborator: () => Promise<void>;
    userId: number;
    projectHasMemberId: number;
};
