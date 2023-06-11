import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type TabPropsDelete = {
    activeclassname: string;
}
export const Tab = styled(NavLink)<TabPropsDelete>`
    text-decoration: none;
    color: var(--gray-4);
    font-weight: 700;
    font-size: 20px;
    transition: 0.3s;
    :hover {
        color: var(--white-1);
    }
    &.active {
        color: var(--white-1);
    }
`;
export const Separator = styled.span`
    color: var(--white-1);
`;