import { Link } from "react-router-dom";
import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

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
    &.visible {
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
type OptionStyleProps = {
    color?: string;
};
export const Option = styled(FlexFlow)<OptionStyleProps>`
    gap: 10px;
    padding: 10px 15px;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
        background-color: var(--gray-5);
    }
    & span, & .iconify {
        color: ${({ color = "--dark-1" }) => `var(${color})`};
    }
    & span {
        font-size: 13px;
        font-weight: bold;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 10px;
        }
    }
`;
export const OptionLink = styled(Option.withComponent(Link))`
    display: flex;
    text-decoration: none;
    flex-direction: row
`;