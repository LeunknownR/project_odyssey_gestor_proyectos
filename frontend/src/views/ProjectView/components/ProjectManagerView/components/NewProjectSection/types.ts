import { ModalProps } from "src/components/Modal/types";
import { FormProjectHook } from "../../types";
import { PreloaderHook } from "src/components/Preloader/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";
import { ProjectForm } from "src/entities/project/entities";

export type NewProjectSectionProps = {
    preloader: PreloaderHook;
    modal: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>;
    notificationCard: NotificationCardHook;
    openCreateProjectModal: () => void;
};
