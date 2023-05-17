import { Row } from 'src/components/styles';
import styled from 'styled-components';
type ContainerProps = {
    className?: any;
    ref: any;
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    display: none;
    flex-direction: column;
    top: 60px;
    right: 0;
    background-color: var(--darkblue-3);
    width: 310px;
    padding: 35px;
    gap: 25px;
    &.open {
        display: flex;
    }
`;
export const UserInfo = styled(Row)`
    padding-bottom: 15px;
    border-bottom: 1px solid var(--white-1-50);
`;
export const Username = styled.h3`
    color: var(--white-1);
    font-size: 22px;
`;
export const RolInfo = styled(Row)`
    color: var(--orange-2);
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        font-size: 23px;
    }
`;
export const Rol = styled.span`
    font-size: 14px;
`;