import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { FlexFlow } from "src/components/styles";
import { Label } from "../../styles";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { DeadlineFieldProps } from "./types";
import { TaskUpdateType } from "../../../../utils/enums";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const DeadlineField = ({ form, changeTaskUpdateType }: DeadlineFieldProps) => {
    const { deadline } = form.value;
    const { isTaskResponsible } = useTaskBoardContext();
    const changeEndDateProjectField = (value: number) => {
        form.change(TASK_FIELD_PROPS.TASK_DEADLINE.name, value);
        changeTaskUpdateType(TaskUpdateType.Immediate);
    };
    return (
        <FlexFlow align="center" gap="20px">
            <Label>Fecha de entrega</Label>
            <CustomDatePicker
                {...TASK_FIELD_PROPS.TASK_DEADLINE}
                value={deadline}
                onChange={changeEndDateProjectField}
                disabled={!isTaskResponsible}
            />
        </FlexFlow>
    );
};

export default DeadlineField;
