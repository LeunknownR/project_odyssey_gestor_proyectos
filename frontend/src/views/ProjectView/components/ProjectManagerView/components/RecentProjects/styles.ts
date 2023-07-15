import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';
import { CARD_LIST_GAP } from './utils/constants';
import { RECENT_PROJECT_CARD_WIDTH } from './components/RecentProjectCard/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 30px;
    }
`;
export const ScreenList = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: ${RECENT_PROJECT_CARD_WIDTH};
        overflow: hidden;
    }
`;
type CardListProps = {
    ref: any;
    currentTranslateX: number;
    dragging: boolean;
}
export const CardList = styled(FlexFlow)<CardListProps>`
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
export const Index = styled.div`
    background-color: var(--darkblue-1);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    transition: 0.35s;
    &.active {
        background-color: var(--darkblue-5);
    }
`;