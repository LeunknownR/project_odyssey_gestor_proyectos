import { ChangeEvent } from "react";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Wrapper } from "./styles";
import { DescriptionFieldProps } from "./types";

const DescriptionField = ({ form }: DescriptionFieldProps) => {
    const { description } = form.value;
    const changeEndDateProjectField = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TASK_FIELD_PROPS.TASK_DESCRIPTION.name, value);
    };
    return (
        <Wrapper>
            <CustomTextArea
                {...TASK_FIELD_PROPS.TASK_DESCRIPTION}
                value={description ? description : ""}
                onChange={changeEndDateProjectField}
            />
        </Wrapper>
    );
};

export default DescriptionField;
