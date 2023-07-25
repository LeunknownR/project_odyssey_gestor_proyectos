import { User } from "src/entities/user/types";
import { CollaboratorFiltersHook, CollaboratorsHook } from "../hooks/types";

export type SettingsViewContextType = {
    currentCollaborator: User | null;
    setCurrentCollaborator: (collaborator: User | null) => void;
    collaboratorsHandler: CollaboratorsHook;
    searchCollaboratorHandler: CollaboratorFiltersHook;
    showForm: () => void;
};
