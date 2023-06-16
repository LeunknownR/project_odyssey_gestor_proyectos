import styled from 'styled-components';
import { ContainerProps, EmptyProps } from './types';
import BackendImage from 'src/views/components/UserImage/components/BackendImage/BackendImage';

export const Empty = styled.div<EmptyProps>`
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    width: 360px;
    height: ${({ height = "unset" }) => height};
    &.hidden {
        display: none;        
    }
`;
export const Container = styled.li`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 18px;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    width: 100%;
    transition: 0.3s;
    user-select: none;
    transition: 0.35s;
    cursor: pointer;
    &.dragged {
        position: fixed;
    }
    &.checked > * {
        opacity: 0.4;
    }
    :hover {
        border-color: var(--white-1);
    }
    :active {
        scale: 1.01;
    }
`;
export const TaskCardName = styled.h3`
    font-size: 17px;
    font-weight: 700;
    align-self: center;
    color: var(--white-1);
`;
export const UnselectedResponsible = styled.img``;
export const DateText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: var(--white-1);
`;
export const TaskPriorityImage = styled(BackendImage)`
    width: 100px;
    height: unset;
    border-radius: 0;
    cursor: pointer;
`;
export const EmptyTaskPriority = styled.img`
    width: 100px;
`;
