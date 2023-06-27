import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 29px 25px;
    width: 100%;
    height: 80vh;
    border-radius: 8px;
    background-color: var(--darkblue-8);
    min-width: 300px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        background-color: unset;
        height: 71vh;
        padding: 0;
        gap: 15px;
    }
`;