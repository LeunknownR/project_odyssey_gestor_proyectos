import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { ProjectCollaborator } from "src/entities/collaborator/types";

export type DeleteCollaboratorModalProps = {
    preloader: PreloaderHook
    modalProps: ModalProps;
    fillCollaborator: () => Promise<void>;
    projectMemberToDelete: ProjectCollaborator | null;
};
