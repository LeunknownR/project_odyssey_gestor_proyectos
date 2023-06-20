import { TaskForm } from "../../../../utils/hooks/types"
import { FieldProps } from "../../types";

export type ResponsibleFieldProps = FieldProps & {
    form: TaskForm;
};