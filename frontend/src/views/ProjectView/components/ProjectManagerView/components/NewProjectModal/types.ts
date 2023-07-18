import { ModalProps } from "src/components/Modal/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { ProjectForm } from "src/entities/project/entities";
import { FormProjectHook } from "../../types";

export type NewProjectModalProps = {
    preloader: PreloaderHook;
    modalProps: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>;
    notificationCard: NotificationCardHook;
};
