import styled from 'styled-components';
import { MOBILE_WIDTH } from 'src/config/constants';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const BackArrowContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 35px;
    }
`;
export const TitleIconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        background-color: var(--green-1);
        font-size: 50px;
        border-radius: 4px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 35px;
        }
    }
`;
export const ProjectName = styled.h1`
    color: var(--white-1);
    font-size: 36px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 20px;
    }
`;
export const OptionsWrapper = styled.div`
    position: relative;
`;