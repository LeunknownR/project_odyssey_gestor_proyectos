//#region Libraries
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";
//#endregion

export const Container = styled(FlexFlow.withComponent("section"))`
    padding-bottom: 35px;
    gap: 15px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 300px;
        overflow: hidden;
    }
`;
type ScreenListProps = {
    currentTranslateX: number;
}
export const ScreenList = styled(FlexFlow)<ScreenListProps>`
    justify-content: center;
    gap: 35px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        transition: 0.3s;
        gap: 30px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        transform: ${({ currentTranslateX }) => `translateX(${currentTranslateX}px)`};
    }
`;