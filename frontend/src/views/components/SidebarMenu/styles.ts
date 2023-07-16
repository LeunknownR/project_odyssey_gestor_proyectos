import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    background-color: var(--darkblue-3);
    height: 100%;
    width: 75px;
    padding-top: 40px;
    gap: 20px;
    z-index: 200;
    @media (max-width: 600px) {
        gap: 15px;
        padding-top: 0;
        flex-direction: row;
        justify-content: center;
        height: max-content;
        width: 100%;
        bottom: 0;
    }
`;
export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    gap: 15px;
    margin: 0;
    @media (max-width: 600px) {
        flex-direction: row;
        margin: 0;
        width: max-content;
    }
`;
export const MenuButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    padding: 10px 5px;
    width: 100%;
    height: max-content;
    &.active {
        background-color: var(--white-1-05);
    }
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
