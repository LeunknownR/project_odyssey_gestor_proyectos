import CustomButton from "src/components/CustomButton/CustomButton";
import Modal from "src/components/Modal/Modal";
import { Content } from "src/components/Modal/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        display: flex;
        place-items: unset;
        background-color: var(--darkblue-3);
        padding: 35px 30px;
        gap: 25px;
        flex-direction: column;
        min-width: 28%;
        align-items: center;
    }
`;
export const ContentImage = styled.img`
    width: 140px;
`;
export const TextModal = styled.p`
    color: var(--white-1);
    text-align: center;
    font-size: 15px;
    line-height: 20px;
    max-width: 300px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
    }
`;
export const SuccessfulChangeButton = styled(CustomButton)`
    color: var(--darkblue-3);
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    transition: 0.3s;
    justify-content: normal;
    padding: 10px 40px;
    border-radius: 5px;
    :hover {
        color: var(--red-4);
        .iconify {
            color: var(--red-4);
        }
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
        padding: 7px 25px;
    }
`;
