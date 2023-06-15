import { ModalProps } from "src/components/Modal/types"
import { PreloaderHook } from "src/components/Preloader/types";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import { FormProjectHook } from "src/views/ProjectManager/types";

export type LeaderSelectionSectionProps = {
    modalProps: ModalProps,
    form: FormProjectHook, 
    currentLeader?: CollaboratorUser;
    preloader: PreloaderHook, 
    updateProject: () => Promise<void>;
    tabIdx: number;
    toPage: (idx: number) => void
}