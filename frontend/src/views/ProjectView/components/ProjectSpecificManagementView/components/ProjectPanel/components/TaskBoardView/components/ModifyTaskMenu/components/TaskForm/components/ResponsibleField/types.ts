import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";
import { TaskForm } from "../../../../utils/hooks/types"
import { FieldProps } from "../../types";

export type ResponsibleFieldProps = FieldProps & {
    form: TaskForm;
    currentResponsible: ProjectTaskCollaboratorUser | null;
}