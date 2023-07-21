import { ModalProps } from "src/components/Modal/types";
import { FormProjectHook } from "../../types";
import { Project, ProjectForm } from "src/entities/project/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";

export type UpdateProjectModalProps = {
    modalProps: ModalProps;
    currentProject: Project | null;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>;
    preloader: PreloaderHook;
    notificationCard: NotificationCardHook;
};
