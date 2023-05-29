import { ModalProps } from "src/components/Modal/types";
import { Project, ProjectForm } from "src/entities/project/types";
import { FormProjectHook } from "../../types";
import { PreloaderHook } from "src/components/Preloader/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";

export type NewProjectSectionProps = {
    preloader: PreloaderHook;
    modal: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    setCurrentProject: (project: Project | null) => void;
    fillProjects: () => Promise<void>;
    notificationCard: NotificationCardHook;
};
