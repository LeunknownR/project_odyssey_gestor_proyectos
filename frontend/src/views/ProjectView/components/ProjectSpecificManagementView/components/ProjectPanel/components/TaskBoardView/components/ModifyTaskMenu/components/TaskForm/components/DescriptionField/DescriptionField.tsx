import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Wrapper } from "./styles";
import { DescriptionFieldProps } from "./types";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import { useState } from "react";
import useTimeoutFunction from "src/utils/hooks/useTimeoutFunction";

const DescriptionField = ({ 
    form, doUpdateTask
}: DescriptionFieldProps) => {
    const { description } = form.value;
    const { isTaskResponsible } = useTaskBoardContext();
    const updateTaskWithTimeout = useTimeoutFunction(doUpdateTask);
    const changeDescriptionField: React.ChangeEventHandler<HTMLTextAreaElement> = ({
        target: { value },
    }) => {
        form.change(TASK_FIELD_PROPS.TASK_DESCRIPTION.name, value);
        updateTaskWithTimeout();
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
