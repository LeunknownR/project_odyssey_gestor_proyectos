import styled from 'styled-components';

type ContainerProps = {
    alignSelf?: string;
    width?: string;
    weight?: string;
    padding?: string;
    maxWidth?: string;
}
export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.35s;
    user-select: none;
    cursor: pointer;
    border: 0;
    align-self: ${({ alignSelf }) => alignSelf};
    width: ${({ width }) => width};
    font-weight: ${({ weight }) => weight};
    padding: ${({ padding }) => padding};
    &.primary {
        color: var(--white-1);
        background-color: var(--dark-2);
        padding: 13px 50px;
        font-size: 22px;
        border-radius: 10px;
        font-weight: 700;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
type IconContainerProps = {
    isIconAfterText?: boolean
}
export const IconContainer = styled.span<IconContainerProps>`
    display: flex;
    align-items: center;
    order:${({isIconAfterText}) => isIconAfterText ? "1" : "0"}
`;
