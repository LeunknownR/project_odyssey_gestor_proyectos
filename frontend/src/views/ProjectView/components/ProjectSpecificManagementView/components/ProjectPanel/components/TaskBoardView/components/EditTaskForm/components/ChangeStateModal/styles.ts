import styled from "styled-components";
import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import CustomButton from "src/components/CustomButton/CustomButton";

export const StyledModal = styled(Modal)`
    ${Content} {
        padding: 25px 20px;
        place-items: unset;
        background-color: var(--darkblue-4);
    }
`;
export const CloseButton = styled(CustomButton)`
    justify-self: flex-end;
    background: transparent;
    padding: 0;
    .iconify {
        color: var(--white-1);
        font-size: 30px;
    }
`;
export const ProjectName = styled.h2`
    color: var(--white-1);
    font-size: 20px;
`;
export const StateLabel = styled.label`
    color: var(--white-1);
    font-weight: 300;
    font-size: 12px;
`;
export const StateList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    border: 1px solid var(--white-1);
    border-radius: 7px;
    overflow: hidden;
    & > div:not(:last-child) {
        border-right: 1px solid var(--white-1);
    }
`;
