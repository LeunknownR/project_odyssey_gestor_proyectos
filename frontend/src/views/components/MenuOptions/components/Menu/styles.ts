import styled from 'styled-components';

type ContainerProps = {
    className?: any;
};
export const Container = styled.div<ContainerProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 4px;
    right: 30px;
    background-color: var(--gray-1);
    border-radius: 2px;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s;
    transform: translateY(-100%);
    &.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    &.right {
        right: unset;
        left: 30px;
    }
    @media (max-width: 600px) {
        &.right {
            right: 105%;
            left: unset;
        }
    }
`;
type OptionProps = {
    color?: string;
    onClick?: any
}
export const Option = styled.div<OptionProps>`
    color: ${({color}) => color};
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    padding: 10px 15px;
    transition: 0.25s;
    :hover {
        background-color: #cccccc;
    }
    @media (max-width: 600px) {
        font-size: 10px;
    }
`;
