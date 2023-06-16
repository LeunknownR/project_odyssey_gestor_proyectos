import { TaskForm, UpdateMainInformationTaskHook } from "../../utils/hooks/types";

export type HeaderProps = {
    form: TaskForm;
    name: string;
    changeTaskUpdateType: UpdateMainInformationTaskHook;
};