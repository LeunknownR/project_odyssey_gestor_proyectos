import { ProjectTaskForm } from "../../types";
import { TaskUpdateType } from "../enums";

export type TaskFormHook = {
    form: TaskForm;
    getProjectFromForm: () => ProjectTaskForm | null;
};
export type TaskForm = {
    value: ProjectTaskForm,
    // isCompleted: () => boolean,
    haveChanges: () => boolean,
    change: (field: string, value: any) => void,
};
export type UpdateMainInformationTaskHook = (taskUpdateType: TaskUpdateType) => void;