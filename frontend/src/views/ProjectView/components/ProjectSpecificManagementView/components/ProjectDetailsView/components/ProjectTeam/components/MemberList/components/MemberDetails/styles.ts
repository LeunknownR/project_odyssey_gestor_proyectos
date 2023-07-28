import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
        padding-right: 10px;
    }
`;
export const Name = styled.h3`
    color: var(--white-1);
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
`;
export const Email = styled.h5`
    color: var(--white-1);
    font-size: 13px;
`;
export const Role = styled.div`
    padding: 5px 10px;
    border-radius: 4050px;
    font-size: 12px;
    font-weight: 700;
    &.leader {
        color: var(--yellow-1);
        background-color: rgba(255, 193, 100, 0.12);
        border: 1px solid rgba(255, 193, 100, 0.5);
    }
    &.member {
        color: var(--lightblue-1);
        background-color: rgba(97, 205, 255, 0.12);
        border: 1px solid rgba(97, 205, 255, 0.5);
    }
`;
export const IconContainer = styled.span`
    display: flex;
    transition: 0.25s;
    border-radius: 50%;
    cursor: pointer;
    padding: 3px;
    .iconify {
        color: var(--red-2);
        font-size: 24px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 30px;
        }
    }
    :hover {
        background-color: var(--red-1);
    }
`;
