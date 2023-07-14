import { CommentInput, Container, SendCommentButton } from "./styles";
import { TASK_FIELD_PROPS } from "../../utils/constants";
import { CommentBoxProps } from "./types";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const CommentBox = ({ taskId, scrollToMenuBottom }: CommentBoxProps) => {
    const [commentText, setCommentText] = useState<string>("");
    const { socketIo } = useTaskBoardContext();
    const changeCommentText = ({
        target: { value },
    }: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(value);
    };
    const createComment = () => {
        const comment = {
            taskId,
            content: commentText
        }
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.CommentInTask,
            comment
        )
        setCommentText("");
        scrollToMenuBottom(0);
    };
    const isValidComment = (): boolean => {
        return commentText.trim().length > 0;
    };
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (isValidComment()) createComment();
            return;
        }
    };
    return (
        <Container align="center">
            <CommentInput
                {...TASK_FIELD_PROPS.TASK_COMMENT}
                value={commentText}
                onChange={changeCommentText}
                onKeyDown={onKeyDownHandler}
                maxHeightExpand={200}
            />
            <SendCommentButton icon="ic:round-comment" onClick={createComment}/>
        </Container>
    );
};

export default CommentBox;
