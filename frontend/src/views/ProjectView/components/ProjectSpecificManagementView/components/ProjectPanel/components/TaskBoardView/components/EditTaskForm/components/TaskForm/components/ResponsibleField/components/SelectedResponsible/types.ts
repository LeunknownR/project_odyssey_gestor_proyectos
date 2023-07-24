import { ProjectTaskCollaboratorUser } from "src/entities/projectTask/entities";

export type SelectedResponsibleProps = {
    selectedResponsible: ProjectTaskCollaboratorUser;
    eraseSelectedResponsible: () => void;
}