import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 15px 25px;
    width: 100%;
    gap: 15px;
    &.primary {
        background-color: var(--darkblue-2);
    }
`;
export const Name = styled.h3`
    font-size: 17px;
    &.primary {
        color: var(--white-1);
    }
`;
export const Email = styled.h5`
    font-size: 12px;
    &.primary {
        color: var(--white-1);
    }
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
    transition: 0.25s;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
    .iconify {
        font-size: 28px;
        color: var(--red-2);
    }
    :hover {
        background-color: var(--red-1);
    }
`;
