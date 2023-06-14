import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";

export type SelectedResponsibleProps = {
    selectedResponsible: ProjectTaskCollaboratorUser;
    eraseSelectedResponsible: () => void;
}