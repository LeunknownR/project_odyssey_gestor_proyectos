import { ModalProps } from "src/components/Modal/types";
import { FormProjectHook } from "../../types";
import { ProjectForm } from "src/entities/project/types";

export type UpdateDateModalProps = {
    modalProps: ModalProps;
    form: FormProjectHook;
    getProjectFromForm: () => ProjectForm | null;
    fillProjects: () => Promise<void>
};
