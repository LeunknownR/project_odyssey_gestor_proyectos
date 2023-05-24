import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    color: #858585;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
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
export const Image = styled.img``;
export const Name = styled.h3`
    font-weight: 400;
`;
