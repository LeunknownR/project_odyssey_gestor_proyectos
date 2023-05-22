import { ModalProps } from "src/components/Modal/types";
import { FormCompanyTypes } from "../../types";
import { ProjectForm } from "src/entities/project/types";

export type UpdateDateModalProps = {
    modalProps: ModalProps;
    form: FormCompanyTypes;
    getProjectFromForm: () => ProjectForm | null;
};
