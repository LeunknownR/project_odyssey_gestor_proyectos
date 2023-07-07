import { FlexFlow } from "src/components/styles";
import UserMessage from "src/views/ProjectView/components/ProjectSpecificManagementView/components/ProjectPanel/components/TaskBoardView/components/EditTaskForm/components/CommentList/UserMessage/UserMessage";
import {
    Collaborator as ChatName,
    Date,
    Wrapper,
    NameDateWrapper,
} from "src/views/ProjectView/components/ProjectSpecificManagementView/components/ProjectPanel/components/TaskBoardView/components/EditTaskForm/components/CommentList/UserMessage/styles";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
`;
export const List = styled(FlexFlow.withComponent("ul"))`
    width: 100%;
    padding-right: 10px;
`;
export const Chat = styled(UserMessage)`
    cursor: pointer;
    transition: 0.25s;
    padding: 8px 12px;
    border-radius: 5px;
    :hover {
        background-color: var(--white-1-12);
    }
    ${ChatName} {
        font-size: 19px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 250px;
    }
    ${Date} {
        font-weight: 300;
        font-size: 13px;
    }
    ${Wrapper} {
        width: 100%;
    }
    ${NameDateWrapper} {
        width: 100%;
        justify-content: space-between;
    }
`;
