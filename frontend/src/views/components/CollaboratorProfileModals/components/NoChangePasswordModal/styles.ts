import Modal from "src/components/Modal/Modal";
import { MOBILE_WIDTH } from "src/config/constants";
import { Content } from "src/routes/styles";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
    ${Content} {
        justify-items: start;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        ${Content} {
            gap: 100px;
        }
    }
`;
export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 30px;
        color: var(--red-2);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        .iconify {
            font-size: 20px;
        }
    }
`;
export const TitleModal = styled.h2`
    font-size: 20px;
    color: var(--red-2);
    font-weight: bold;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 16px;
    }
`;
export const TextModal = styled.p`
    font-size: 16px;
    color: var(--dark-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
    }
`;