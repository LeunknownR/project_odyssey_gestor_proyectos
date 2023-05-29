import { ModalProps } from "src/components/Modal/types";
import { FormProjectHook } from "../../types";
import { ProjectForm } from "src/entities/project/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";

export type UpdateProjectModalProps = {
    modalProps: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>;
    preloader: PreloaderHook;
    notificationCard: NotificationCardHook;
};
