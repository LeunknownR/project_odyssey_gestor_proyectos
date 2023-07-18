import { TaskForm } from "../../../../utils/hooks/types";
import { FieldProps } from "../../types";

export type DescriptionFieldProps = FieldProps & {
    form: TaskForm;
};