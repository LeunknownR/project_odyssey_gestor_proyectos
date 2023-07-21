import { CommentInput } from "src/views/ProjectView/components/ProjectSpecificManagementView/components/ProjectPanel/components/TaskBoardView/components/EditTaskForm/components/CommentBox/styles";
import styled from "styled-components";

export const ChatInputContainer= styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    height: 56px;
    background-color: var(--darkblue-2);
    padding: 27px 0 27px 0;
`;
export const ChatInput = styled.div`
    min-height: 100%;
    min-width: 90%;
    background-color: brown;
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 35px;
        color: var(--darkblue-5);
    }
`;