import { Project, ProjectForm } from "src/entities/project/types";
import { ProjectFilters, ProjectForStateForm } from "../../types";
import { CollaboratorUser } from "src/entities/collaborator/types";

export type FormProjectHook = {
    form: FormProject;
    getProjectFromForm: () => ProjectForm | null;
};
export type FormProject = {
    value: ProjectForStateForm,
    isCompleted: () => boolean,
    haveChanges: () => boolean,
    change: (field: string, value: any) => void,
}
export type ProjectFiltersHook = {
    value: ProjectFilters;
    change: (filter: string, value: string) => void;
};
export type ProjectListHook = {
    recentProjects: Project[];
    allProjects: Project[];
    fillProjects: () => Promise<void>;
    doFill: () => void;
};
export type SelectCollaboratorHookParams = {
    requestSearchCollaborators: (value: string) => Promise<CollaboratorUser[]>;
};
export type SelectCollaboratorHook = {
    collaboratorUserList: CollaboratorUser[];
    fill: (collaboratorSearched: string) => Promise<void>;
    clear: () => void;
};
