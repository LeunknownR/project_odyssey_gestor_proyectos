import styled from "styled-components";

type ContainerProps = {
    className?: any;
};
export const Container = styled.span<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 35px;
    font-weight: bold;
    color: var(--dark-1);
    background-color: var(--cream-1);
    border-radius: 50%;
    width: 2.3em;
    height: 2.3em;
    /* &.big {  } */
    /* font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--cream-1);
    user-select: none;
    width: 100%;
    height: 100%;
    width: 100px;
    height: 100px;
    & span {
        color: var(--dark-1);
        font-weight: 700;
        font-size: 28px;
    } */
    &.bigger {
        font-size: 32px;
    }
`;