import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

type ContainerProps = {
    minWidth?: string;
    width?: string;
    maxWidth?: string;
};
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: ${({ minWidth = "100px" }) => minWidth};
    width: ${({ width = "100%" }) => width};
    max-width: ${({ maxWidth }) => maxWidth};
    position: relative;
    &.primary,
    &.secondary {
        gap: 14px;
    }
`;
export const LabelContent = styled.label`
    font-weight: 600;
    &.primary {
        font-weight: 700;
        color: var(--white-1);
        font-size: 20px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 16px;
        }
    }
    &.secondary {
        font-weight: 700;
        color: var(--darkblue-1);
        font-size: 20px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 16px;
        }
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    transition: 0.3s;
    font-size: 16px;
    gap: 7px;
    min-height: 80px;
    &.primary {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-1);
        border-radius: 5px;
        ::placeholder {
            color: var(--gray-3);
        }
    }
    &.secondary {
        background-color: var(--white-1-12);
        border: 1px solid var(--darkblue-1);
        color: var(--darkblue-1);
        border-radius: 5px;
        ::placeholder {
            color: var(--gray-2);
        }
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 13px;
    }
`;
export const TextArea = styled.textarea`
    outline: none;
    border-radius: inherit;
    width: 100%;
    transition: 0.3s;
    border: 0;
    background-color: transparent;
    color: inherit;
    resize: none;
    min-height: 80px;
    padding: 10px 10px 0;
    overflow-y: scroll;
    transition: 0.35s;
    :disabled {
        opacity: 0.6;
        pointer-events: none;
    }
    ::placeholder {
        user-select: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const MaxLength = styled.span`
    width: 100%;
    text-align: right;
    font-size: 14px;
    user-select: none;
    padding: 0px 10px 5px 0;
`;
