import { TaskForm } from "../../../../utils/hooks/types";

export type TaskNameFieldProps = {
    form: TaskForm;
    name: string;
    doUpdateTask: () => void;
};