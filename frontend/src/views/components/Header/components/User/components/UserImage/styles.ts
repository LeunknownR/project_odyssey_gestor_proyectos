import styled from 'styled-components';
type ContainerProps = {
    className?: boolean | string;
    onMouseDown: any;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--cream-1);
    user-select: none;
    font-size: 28px;
    min-width: 64px;
    min-height: 64px;
    &.clickable {
        cursor: pointer;
        font-size: 22px;
        min-width: 42px;
        min-height: 42px;
    }
`;
export const NameInitials = styled.span`
    color: var(--dark-1);
    font-weight: 700;
`;
export const UserPhoto = styled.img`
  
`;