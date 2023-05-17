import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    gap: 14px;
    max-width: 260px;
`;
export const Name = styled.h3`
    color: var(--white-1);
    font-size: 16px;
    width: 70%;
`;
export const Role = styled.div`
    padding: 5px 10px;
    color: var(--yellow-1);
    background-color: rgba(255, 193, 100, 0.12);
    border: 1px solid rgba(255, 193, 100, 0.5);
    border-radius: 4050px;
    font-size: 12px;
    font-weight: 700;
`;
export const IconContainer = styled.span`
    display: flex;
    translate: -30px;
    transition: 0.25s;
    border-radius: 50%;
    cursor: pointer;
    padding: 3px;
    .iconify {
        color: var(--red-2);
        font-size: 24px;
    }
    :hover {
        background-color: var(--red-1);
    }
`;
