import { ProjectForm } from "src/entities/project/types";
import { FormCompanyTypes } from "../../types";

export type FormProjectHook = {
    form: FormCompanyTypes;
    getProjectFromForm: () => ProjectForm | null;
};