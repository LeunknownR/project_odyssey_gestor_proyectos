import styled from "styled-components";

type ContainerProps = {
    onMouseDown: any;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    width: 30px;
`;
export const Squares = styled.div`
    width: 7px;
    height: 7px;
    border: 2px solid var(--white-3);
`;
