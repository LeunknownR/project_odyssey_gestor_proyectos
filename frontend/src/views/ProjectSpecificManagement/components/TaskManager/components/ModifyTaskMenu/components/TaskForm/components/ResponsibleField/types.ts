import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";
import { TaskForm } from "../../../../utils/hooks/types"

export type ResponsibleFieldProps = {
    form: TaskForm;
    currentResponsible?: ProjectTaskCollaboratorUser | null;
}