import { Row } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';
import { CARD_LIST_GAP } from './utils/constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
`;
export const ScreenList = styled(Row)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 280px;
        overflow: hidden;
    }
`;
type CardListProps = {
    ref: any;
    currentTranslateX: number;
    dragging: boolean;
}
export const CardList = styled(Row)<CardListProps>`
    display: flex;
    justify-content: center;
    gap: 35px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: ${CARD_LIST_GAP}px;
        flex-wrap: nowrap;
        transform: ${({ currentTranslateX }) => `translateX(${currentTranslateX}px)`};
        transition: ${({ dragging }) => dragging ? "transform ease-out 0.25s" : "transform ease-out 0.45s"};
        justify-content: flex-start;
    }
`;
type IndexProps = {
    className: any;
}
export const Index = styled.div<IndexProps>`
    height: 20px;
    width: 20px;
    background-color: var(--darkblue-5);
    border-radius: 50%;
    transition: 0.35s;
    &.active {
        background-color: var(--darkblue-1);
    }
`;