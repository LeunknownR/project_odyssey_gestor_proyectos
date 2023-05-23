import styled from 'styled-components';

type ContainerProps = {
    className?: any;
};
export const Container = styled.div<ContainerProps>`
    display: none;
    position: absolute;
    top: 0;
    right: 30px;
    background-color: var(--gray-1);
    border-radius: 2px;
    z-index: 999;
    &.show {
        display: flex;
        flex-direction: column;
    }
    &.right {
        right: unset;
        left: 30px;
    }
`;
type OptionProps = {
    color?: string;
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
`;
