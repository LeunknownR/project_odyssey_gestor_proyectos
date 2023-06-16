import CustomButton from "src/components/CustomButton/CustomButton";
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-self: flex-end;
    gap: 20px;
`;
export const CancelRedModalButton = styled(CustomButton)`
    background-color: transparent;
    color: var(--dark-2);
    border: 1px solid var(--dark-2);
    font-weight: 700;
    padding: 6px;
    min-width: 110px;
    :hover {
        border-color: transparent;
    }
`;
export const ConfirmRedModalButton = styled(CustomButton)`
    background-color: var(--red-2);
    color: var(--white-1);
    font-weight: 700;
    padding: 6px;
    min-width: 110px;
    :hover {
        background-color: var(--red-3);
    }
`;
