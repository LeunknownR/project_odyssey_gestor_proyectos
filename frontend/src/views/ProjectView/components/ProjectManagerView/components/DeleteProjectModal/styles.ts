import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 30px;
        color: var(--red-2);
    }
`;
export const TitleModal = styled.h2`
    font-size: 20px;
    color: var(--red-2);
    font-weight: bold;
`;
export const TextModal = styled.p`
    font-size: 16px;
    color: var(--dark-1);
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 14px;
    }
`;
