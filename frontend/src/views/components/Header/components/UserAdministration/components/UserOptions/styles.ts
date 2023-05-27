import { Row } from 'src/components/styles';
import styled from 'styled-components';
type ContainerProps = {
    className?: any;
    ref: any;
}
export const Container = styled.div<ContainerProps>`
    position: fixed;
    display: none;
    flex-direction: column;
    top: calc(var(--main-header-height) - 1px);
    right: 40px;
    background-color: var(--darkblue-3);
    width: 320px;
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
