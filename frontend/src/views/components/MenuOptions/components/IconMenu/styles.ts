import CustomButton from "src/components/CustomButton/CustomButton";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

type ContainerProps = {
    onMouseDown: any;
}
export const Square = styled.div`
    width: 7px;
    height: 7px;
    border: 2px solid var(--white-3);
    transition: 0.3s;
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 5px;
        height: 5px;
    }
`;
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border-radius: 50%;  
    transition: background-color 1s, transform 0.3s;
    padding: 5px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        ${Square} {
            background-color: var(--white-1);
        }
    }
    @media (max-width: 600px) {
        width: 20px;
    }
`;
export const CustomIcon = styled.span`
    display: flex;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 100%;
    padding: 2px;
    .iconify {
        font-size: 32px;
        color: var(--white-1);
    }
    :hover {
        background-color: var(--white-1-12);
    }
    :active {
        scale: 0.9;
    }
`;