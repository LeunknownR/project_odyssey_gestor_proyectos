import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Wrapper } from "./styles";
import { DescriptionFieldProps } from "./types";
import { TaskUpdateType } from "../../../../utils/enums";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const DescriptionField = ({ 
    form, changeTaskUpdateType
}: DescriptionFieldProps) => {
    const { description } = form.value;
    const { isTaskResponsible } = useTaskBoardContext();
    const changeDescriptionField: React.ChangeEventHandler<HTMLTextAreaElement> = ({
        target: { value },
    }) => {
        form.change(TASK_FIELD_PROPS.TASK_DESCRIPTION.name, value);
        changeTaskUpdateType(TaskUpdateType.WithTimeout);
    };
    return (
        <Wrapper>
            <CustomTextArea
                {...TASK_FIELD_PROPS.TASK_DESCRIPTION}
                value={description ? description : ""}
                onChange={changeDescriptionField}
                disabled={!isTaskResponsible}
            />
        </Wrapper>
    );
};

export default DescriptionField;
