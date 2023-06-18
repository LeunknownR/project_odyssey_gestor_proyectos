import styled from 'styled-components';
import { ContainerProps, ShadowProps } from './types';
import BackendImage from 'src/views/components/UserImage/components/BackendImage/BackendImage';

export const Shadow = styled.div<ShadowProps>`
    gap: 22px;
    padding: 18px;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    width: 100%;
    height: ${({ height = 0 }) => height}px;
`;
export const Container = styled.li<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 18px;
    border: 1px solid var(--gray-3);
    border-radius: 10px;
    width: 100%;
    transition: 0.35s border-color, 0.35s scale, top 0.05s, left 0.05s;
    user-select: none;
    cursor: pointer;
    &.dragged {
        background-color: var(--darkblue-4);
        width: ${({ width = 0 }) => width}px;
        position: fixed;
        top: ${({ top = 0 }) => top}px;
        left: ${({ left = 0 }) => left}px;
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
export const DateText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: var(--white-1);
    &.late {
        color: var(--red-2);
    }
`;
export const TaskPriorityImage = styled(BackendImage)`
    width: 100px;
    height: unset;
    border-radius: 0;
    user-select: none;
    cursor: pointer;
    &.disabled {
        pointer-events: none;
        opacity: 0.6;
    }
`;
export const EmptyTaskPriority = styled.img`
    width: 100px;
`;
