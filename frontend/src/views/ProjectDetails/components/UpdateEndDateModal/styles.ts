import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const IconContainer = styled.span`
    display: flex;
    align-items: center;
    .iconify {
        font-size: 30px;
        color: var(--darkblue-1);
    }
`;
export const TitleModal = styled.h2`
    font-size: 20px;
    color: var(--darkblue-1);
    font-weight: bold;
`;
export const Content = styled.section`
    display: flex;
    flex-direction: column;
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 85%;
    }
`;
