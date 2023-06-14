import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const PriorityImage = styled.img`
    cursor: pointer;
    width: 100px;
`;
export const DeletePriority = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;
    padding: 2px;
    .iconify {
        font-size: 26px;
        color: var(--gray-1);
    }
    :hover {
        background-color: var(--white-1-12);
    }
`;
export const ListWrapper = styled.div`
    overflow: hidden;
`;
export const PriorityList = styled(FlexFlow.withComponent("ul"))`
    background-color: var(--darkblue-4);
    border: 1px solid var(--darkblue-5);
    border-radius: 5px;
    translate: 0 -105%;
    transition: 0.4s;
    &.show {
        translate: 0;
    }
`;
export const PrioritySelector = styled(FlexFlow.withComponent("li"))`
    justify-content: center;
    width: 100%;
    list-style: none;
    border-bottom: 1px solid var(--darkblue-5);
    cursor: pointer;
    transition: 0.3s;
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