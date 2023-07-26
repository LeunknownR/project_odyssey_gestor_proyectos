import { User } from "src/entities/user/types";
import { CollaboratorFiltersHook, CollaboratorsHook } from "../hooks/types";
import { PreloaderHook } from "src/components/Preloader/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";

export type SettingsViewContextType = {
    preloader: PreloaderHook;
    currentCollaborator: User | null;
    setCurrentCollaborator: (collaborator: User | null) => void;
    collaboratorsHandler: CollaboratorsHook;
    searchCollaboratorHandler: CollaboratorFiltersHook;
    notificationCard: NotificationCardHook;
    showForm: () => void;
    hideForm: () => void;
};
