import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    color: var(--gray-4);
    padding: 5px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.35s;
    user-select: none;
    list-style: none;
    :first-child {
        border-radius: 5px 5px 0 0;
        border-top: 1px solid transparent;
    }
    :last-child {
        border-radius: 0 0 5px 5px;
    }
    &.selected,
    :hover {
        background-color: rgba(45, 90, 119, 0.2);
    }
`;
export const Name = styled.h3`
    font-weight: 400;
`;
