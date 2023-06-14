import CustomButton from "src/components/CustomButton/CustomButton";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-self: flex-end;
    gap: 20px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        justify-self: unset;
        gap: 10px;
    }
`;
export const CancelBlueModalButton = styled(CustomButton)`
    background-color: transparent;
    border: 1px solid var(--darkblue-2);
    font-size: 17px;
    font-weight: 700;
    color: var(--darkblue-2);
    padding: 8px;
    min-width: 125px;
    :hover {
        border-color: transparent;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 7px;
        min-width: 100px;
        font-size: 15px;
    }
`;
export const ConfirmBlueModalButton = styled(CustomButton)`
    color: var(--white-1);
    background-color: var(--darkblue-2);
    border: 1px solid transparent;
    font-size: 17px;
    font-weight: 700;
    padding: 8px;
    min-width: 125px;
    :hover {
        background-color: var(--darkblue-1);
    }
    &:disabled {
        background-color: var(--darkblue-0);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 7px;
        min-width: 100px;
        font-size: 15px;
    }
`;
