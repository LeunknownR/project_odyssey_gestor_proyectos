import { ProjectTask } from "src/entities/projectTasks/entities";
import { TaskForm, UpdateMainInformationTaskHook } from "../../utils/hooks/types";

export type TaskFormProps = {
    currentProjectTask: ProjectTask;
    form: TaskForm;
}
export type FieldProps = {
    changeTaskUpdateType: UpdateMainInformationTaskHook;
};