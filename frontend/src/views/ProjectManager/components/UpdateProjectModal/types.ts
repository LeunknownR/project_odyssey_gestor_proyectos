import { ModalProps } from "src/components/Modal/types"
import { FormProjectHook } from "../../types";
import { ProjectForm } from "src/entities/project/types";
import { CollaboratorUser } from "src/entities/collaborator/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type UpdateProjectModalProps = {
    modalProps: ModalProps;
    form: FormProjectHook,
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>;
    selectedLeader: CollaboratorUser | undefined;
    preloader: PreloaderHook;
}