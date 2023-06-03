import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type TabPropsDelete = {
    activeclassname: string;
}
export const Tab = styled(NavLink)<TabPropsDelete>`
    text-decoration: none;
    color: var(--white-1);
    font-weight: 300;
    font-size: 20px;
    :hover {
        font-weight: 700;
    }
    &.active {
        font-weight: 700;
    }
`;
export const Separator = styled.span`
    color: var(--white-1);
`;