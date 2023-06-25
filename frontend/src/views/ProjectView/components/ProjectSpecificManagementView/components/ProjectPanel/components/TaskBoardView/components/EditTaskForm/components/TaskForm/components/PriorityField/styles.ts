import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const EmptyTaskPriority = styled.img`
    cursor: pointer;
    width: 100px;
    height: 35px;
    &.disabled {
        pointer-events: none;
        opacity: 0.5;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 70px;
        height: 30px;
    }
`;
export const Content = styled(FlexFlow)`
    flex-direction: column;
    gap: 10px;
    position: relative;
`;
export const PriorityList = styled(FlexFlow.withComponent("ul"))`
    background-color: var(--darkblue-4);
    border: 1px solid var(--darkblue-5);
    border-radius: 5px;
    translate: 0 -105%;
    transition: 0.15s;
`;
export const ListWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    top: 140%;
    left: 0;
    z-index: 0;
    &.show {
        z-index: 1;
        & ${PriorityList} {
            translate: 0;
            transition: 0.25s;
        }
    }
`;
export const PrioritySelector = styled(FlexFlow.withComponent("li"))`
    justify-content: center;
    width: 100%;
    list-style: none;
    border-bottom: 1px solid var(--darkblue-5);
    cursor: pointer;
    transition: 0.3s;
    padding: 10px;
    :last-child {
        border-bottom: none;
    }
    :hover {
        background-color: var(--white-1-12);
    }
`;
export const SelectedPriorityWrapper = styled.div`
    cursor: pointer;
`;