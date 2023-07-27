import { ProjectTaskCollaboratorUser } from "src/entities/projectTask/entities";

export type SelectedResponsibleProps = {
    selectedResponsible: ProjectTaskCollaboratorUser;
    removeResponsible: () => void;
    disabled?: boolean;
};