import { TaskForm } from "../../utils/hooks/types";

export type TaskFormProps = {
    form: TaskForm;
    doUpdateTask: () => void;
};
export type FieldProps = {
    doUpdateTask: () => void;
};