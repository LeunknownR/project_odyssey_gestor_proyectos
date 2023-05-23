import { Project, ProjectForm } from "src/entities/project/types";
import { FormCompanyTypes, ProjectFilters } from "../../types";

export type FormProjectHook = {
    form: FormCompanyTypes;
    getProjectFromForm: () => ProjectForm | null;
};
export type ProjectFiltersHook = {
    value: ProjectFilters;
    change: (filter: string, value: string) => void;
};
export type ProjectListHook = {
    recentProjects: Project[];
    allProjects: Project[];
    fillProjects: () => Promise<void>;
    doFill: () => void
};
