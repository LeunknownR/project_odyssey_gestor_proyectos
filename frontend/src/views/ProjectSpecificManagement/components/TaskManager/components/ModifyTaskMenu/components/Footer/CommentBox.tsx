import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Container, IconContainer } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TASK_FIELD_PROPS } from "../../utils/constants";
import { CommentBoxProps } from "./types";

const CommentBox = ({ taskId }: CommentBoxProps) => {
    return (
        <Container align="center">
            <CustomTextArea
                {...TASK_FIELD_PROPS.TASK_COMMENT}
                value=""
                onChange={() => console.log("GNOMO")}
            />
            <IconContainer>
                <Icon icon="ic:round-comment" />
            </IconContainer>
        </Container>
    );
};

export default CommentBox;
