//#region Libraries
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//#endregion

export const MainMenuButtonRegular = styled.button`
    display: flex;
    justify-content: center;
    padding: 15px 5px;
    width: 100%;
    height: max-content;
    transition: 0.2s;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    .iconify {
        transition: 0.2s;
        font-size: 33px;
        color: var(--white-1);
    }
    :hover {
        .iconify {
            color: var(--orange-3);
        }
    }
    @media (max-width: 600px) {
        padding: 15px 20px;
        flex-direction: row;
        align-items: center;
        width: max-content;
        height: 100%;
        bottom: 0;
        .iconify {
            font-size: 28px;
        }
    }
`;
export const MainMenuButtonLink = styled(MainMenuButtonRegular.withComponent(NavLink))`
    &.active {
        background-color: var(--white-1-05);
    }
`;