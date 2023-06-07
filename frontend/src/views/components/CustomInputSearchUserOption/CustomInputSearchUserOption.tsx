import { FlexFlow } from "src/components/styles";
import UserImage from "../UserImage/UserImage";
import { CustomInputSearchUserOptionProps } from "./types";

const CustomInputSearchUserOption = (props: CustomInputSearchUserOptionProps) => {
    return (
        <FlexFlow align="center" gap="10px">
            <UserImage 
                className="small"
                {...props}/>
            {props.name} {props.surname}
        </FlexFlow>
    );
}

export default CustomInputSearchUserOption;