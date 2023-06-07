import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Wrapper } from "./styles";

const DescriptionField = () => {
    return (
        <Wrapper>
            <CustomTextArea
                {...TASK_FIELD_PROPS.TASK_DESCRIPTION}
                value=""
                onChange={() => console.log("GNOMO")}
            />
        </Wrapper>
    );
};

export default DescriptionField;
