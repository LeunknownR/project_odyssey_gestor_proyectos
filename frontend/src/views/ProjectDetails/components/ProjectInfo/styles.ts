import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const DataPart1 = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const DataPart2 = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 70px;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        padding: 0;
    }
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        background-color: var(--green-1);
        font-size: 50px;
        border-radius: 4px;
    }
`;
export const ProjectName = styled.h1`
    color: var(--white-1);
    font-size: 36px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 20px;
    }
`;
export const Description = styled.p`
    color: var(--white-1);
    font-weight: 400;
    font-size: 17px;
    max-width: 565px;
`;