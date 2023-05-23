import { ModalProps } from "src/components/Modal/types";
import { Project, ProjectForm } from "src/entities/project/types";
import { FormCompanyTypes } from "../../types";

export type NewProjectSectionProps = {
    modal: ModalProps
    form: FormCompanyTypes;
    getProjectFromForm: () => ProjectForm | null;
    setCurrentProject: (project: Project | null) => void;
    fillProjects: () => Promise<void>;
};