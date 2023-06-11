import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { FlexFlow } from "src/components/styles";
import { Label } from "../../styles";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";

const DeadlineField = () => {
    return (
        <FlexFlow align="center" gap="20px">
            <Label>Fecha de entrega</Label>
            <CustomDatePicker {...TASK_FIELD_PROPS.TASK_DEADLINE} />
        </FlexFlow>
    );
};

export default DeadlineField;
