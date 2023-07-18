import { CommentInput, Container, SendCommentButton } from "./styles";
import { TASK_FIELD_PROPS } from "../../utils/constants";
import { CommentBoxProps } from "./types";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { createPortal } from "react-dom";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

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
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (isValidComment()) createComment();
    };
    const render = () => {
        return (
            <Container id="comment-box" align="center">
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
    }
    const { isMobile } = useMainContext();
    if (!isMobile)
        return render();
    return createPortal(
        render(),
        document.getElementById("edit-task-form") as Element
    );
};

export default CommentBox;
