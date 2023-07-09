import styled from "styled-components";
import { NavLink } from "react-router-dom";

type TabPropsDelete = {
    activeclassname: string;
};
export const Tab = styled(NavLink)<TabPropsDelete>`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--white-1);
    font-size: 20px;
    transition: 0.3s;
    padding: 6px 12px;
    font-weight: 400;
    border-radius: 8px;
    &.active,
    &:hover {
        background-color: var(--gray-6-33);
    }
    &.active {
        font-weight: 700;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        color: var(--white-1);
        font-size: 28px;
    }
`;
export const Separator = styled.span`
    display: flex;
    align-items: center;
    color: var(--white-1);
    .iconify {
        font-size: 30px; 
    }
`;
