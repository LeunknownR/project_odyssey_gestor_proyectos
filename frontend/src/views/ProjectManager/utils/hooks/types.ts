import { Project, ProjectForm } from "src/entities/project/types";
import { ProjectFilters } from "../../types";
import { CollaboratorUser } from "src/entities/collaborator/types";

export type FormProjectHook = {
    form: FormProjectHook;
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
export type SelectCollaboratorHookParams = {
    requestSearchCollaborators: (value: string) => Promise<CollaboratorUser[]>
}
export type SelectCollaboratorHook = {
    collaboratorUserList: CollaboratorUser[];
    fill: (collaboratorSearched: string) => Promise<void>;
    getText: ({ name, surname }: CollaboratorUser) => string;
    clear: () => void;
}
export type CollaboratorForMemberHook = {
    collaborator: CollaboratorUser[];
    fill: (collaboratorSearched: string) => Promise<void>;
    clear: () => void;
}