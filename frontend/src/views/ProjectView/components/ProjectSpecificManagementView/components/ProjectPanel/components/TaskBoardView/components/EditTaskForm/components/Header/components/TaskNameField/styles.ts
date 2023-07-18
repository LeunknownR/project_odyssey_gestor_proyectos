import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const EditTaskNameInput = styled.input`
    background-color: transparent;
    border: 0;
    outline: none;
    color: var(--white-1);
    font-weight: 400;
    caret-color: var(--white-1);
    font-size: 24px;
    width: 100%;
    border: 2px dashed #FFFFFF;
    border-radius: 5px;
    padding: 5px 10px;
`;
export const TaskName = styled.h2`
    color: var(--white-2);
    font-size: 24px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 80vw;
        &.can-edit-task {
            max-width: 60vw;
        }
    }
`;