import { TaskForm } from "../../../../utils/hooks/types";
import { FieldProps } from "../../types";

export type DeadlineFieldProps = FieldProps & {
    form: TaskForm;
};
