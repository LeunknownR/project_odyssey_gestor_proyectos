import styled from "styled-components";

type ContainerProps = {
    className?: any;
};
export const Container = styled.span<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    color: var(--dark-1);
    background-color: var(--cream-1);
    border-radius: 50%;
    width: 2em;
    height: 2em;
    font-size: 24px;
    &.big {
        font-size: 32px;
    }
    &.small {
        font-size: 14px;
    }
`;