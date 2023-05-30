import { Row } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

type ContainerProps = {
    className?: any;
    ref: any;
}
export const Container = styled.div<ContainerProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: calc(var(--main-header-height) - 1px);
    right: 40px;
    background-color: var(--darkblue-3);
    width: 320px;
    padding: 35px;
    gap: 25px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
    transition: 0.35s;
    &.open {
        display: flex;
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 240px;
        top: unset;
        right: 6vw;
        bottom: calc(var(--main-sidebar-height-mobile) + 1px);
    }
`;
export const UserInfo = styled(Row)`
    padding-bottom: 15px;
    border-bottom: 1px solid var(--white-1-50);
`;
export const FullName = styled.h3`
    color: var(--white-1);
    font-size: 22px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 16px;
    }
`;
