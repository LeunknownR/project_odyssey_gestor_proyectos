import { ModalProps } from "src/components/Modal/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { ProjectCollaborator } from "src/entities/collaborator/types";

export type DeleteCollaboratorModalProps = {
    preloader: PreloaderHook
    modalProps: ModalProps;
    fillProjectDetails: () => Promise<void>;
    projectMemberToDelete: ProjectCollaborator | null;
    notificationCard: NotificationCardHook;
};