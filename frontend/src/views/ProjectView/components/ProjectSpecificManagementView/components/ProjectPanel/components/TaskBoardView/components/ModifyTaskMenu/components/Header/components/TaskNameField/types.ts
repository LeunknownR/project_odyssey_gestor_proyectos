import { TaskForm, UpdateMainInformationTaskHook } from "../../../../utils/hooks/types";

export type TaskNameFieldProps = {
    form: TaskForm;
    name: string;
    changeTaskUpdateType: UpdateMainInformationTaskHook;
};
