import { ModalProps } from "src/components/Modal/types"
import { Project, ProjectForm } from "src/entities/project/types";
import { FormProjectHook } from "src/views/ProjectManager/types";

export type NewProjectModalProps = {
    modalProps: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>
}