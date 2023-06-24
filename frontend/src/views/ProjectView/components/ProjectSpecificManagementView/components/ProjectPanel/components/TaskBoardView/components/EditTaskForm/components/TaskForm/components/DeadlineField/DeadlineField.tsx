import { Icon } from "@iconify/react/dist/iconify.js";
import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { DeleteSelectedDataField, Label } from "../../styles";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { DeadlineFieldProps } from "./types";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import { isDateBeforeToday } from "src/utils/dates";
import { Container, Content } from "./styles";

const DeadlineField = ({ form, doUpdateTask }: DeadlineFieldProps) => {
    const { deadline } = form.value;
    const { canEditTask } = useTaskBoardContext();
    const changeEndDateProjectField = (value: number) => {
        form.change(TASK_FIELD_PROPS.TASK_DEADLINE.name, value);
        doUpdateTask();
    };
    return (
        <Container align="center" gap="20px">
            <Label>Fecha de entrega</Label>
            <Content align="center" gap="10px">
                <CustomDatePicker
                    {...TASK_FIELD_PROPS.TASK_DEADLINE}
                    value={deadline}
                    onChange={changeEndDateProjectField}
                    disabled={!canEditTask}
                    error={isDateBeforeToday(deadline)}
                />
                {(canEditTask && deadline !== -1) && <DeleteSelectedDataField
                    onClick={() => changeEndDateProjectField(-1)}>
                    <Icon icon="material-symbols:close" />
                </DeleteSelectedDataField>}
            </Content>
        </Container>
    );
};

export default DeadlineField;
