import styled from "styled-components";

type ContainerProps = {
    onMouseDown: any;
}
export const Squares = styled.div`
    width: 7px;
    height: 7px;
    border: 2px solid var(--white-3);
    transition: 0.3s;
`;
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    width: 30px;
    border-radius: 50%;  
    transition: background-color 1s, transform 0.3s;
    padding: 5px;
    transition: 0.3s;
    :hover {
        ${Squares} {
            background-color: var(--white-1);
        }
    }
    @media (max-width: 600px) {
        width: 20px;
    }
`;
