import { ProjectTask } from "src/entities/projectTasks/entities";
import { TaskForm } from "../../utils/hooks/types";

export type TaskFormProps = {
    currentProjectTask: ProjectTask;
    form: TaskForm;
}