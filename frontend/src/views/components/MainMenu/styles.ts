import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--darkblue-3);
    height: 100%;
    width: 75px;
    padding-top: calc(var(--main-header-height) + 20px);
    gap: 20px;
    z-index: 2;
    @media (max-width: 600px) {
        gap: 15px;
        padding-top: 0;
        flex-direction: row;
        justify-content: center;
        height: max-content;
        width: 100%;
        top: unset;
        bottom: 0;
    }
`;
export const MenuList = styled(FlexFlow.withComponent("ul"))`
    flex-direction: column;
    list-style: none;
    padding: 0;
    width: 100%;
    gap: 0;
    margin: 0;
    @media (max-width: 600px) {
        flex-direction: row;
        margin: 0;
        width: max-content;
    }
`;