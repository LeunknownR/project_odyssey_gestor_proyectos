import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0.5px solid var(--gray-4);
    width: 100%;
`;
export const MainData = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & > span {
        color: var(--gray-4);
    }
`;
export const IconWrapper = styled.span`
    display: grid;
    place-items: center;
    transition: 0.35s;
    border: 0;
    width: 1.8em;
    height: 1.8em;
    border-radius: 30%;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
        border-color: var(--red-2);
    }
    & .iconify {
        color: var(--red-2);
        font-size: 25px;
    }
`;