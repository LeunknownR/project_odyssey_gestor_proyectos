import { ModalProps } from "src/components/Modal/types"
import { Project, ProjectForm } from "src/entities/project/types";
import { FormCompanyTypes } from "src/views/ProjectManager/types";

export type NewProjectModalProps = {
    modalProps: ModalProps;
    form: FormCompanyTypes;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>
}