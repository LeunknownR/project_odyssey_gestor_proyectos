import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import { FormProjectHook } from "src/views/ProjectManager/types";

export type LeaderSelectorProps = {
    currentLeader?: CollaboratorUser;
    form: FormProjectHook;
    modalProps: ModalProps;
    variant: string;
    preloader: PreloaderHook;
};
