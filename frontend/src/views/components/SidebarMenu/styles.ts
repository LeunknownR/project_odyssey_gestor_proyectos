import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--darkblue-3);
    height: calc(100% - 75px);
    width: 75px;
    padding-top: 40px;
    gap: 20px;
    z-index: 200;
`;
export const NewProjectButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-1);
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
        .iconify {
            color: var(--orange-3);
        }
    }
    .iconify {
        transition: 0.2s;
        font-size: 32px;
    }
`;
export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    gap: 15px;
`;
type MenuButtonProps = {
    activeclassname: string;
};
export const MenuButton = styled(NavLink)<MenuButtonProps>`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 100%;
    &.active {
        background-color: var(--white-1-05);
    }
    :hover {
        .iconify {
            color: var(--orange-3);
        }
    }
    .iconify {
        transition: 0.2s;
        font-size: 33px;
        color: var(--white-1);
    }
`;
