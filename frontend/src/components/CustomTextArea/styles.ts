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
    }
    &.secondary {
        font-weight: 700;
        color: var(--darkblue-1);
        font-size: 20px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    transition: 0.3s;
    padding: 12px 10px;
    font-size: 16px;
    &.primary {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-1);
        border-radius: 5px;
        padding: 10px 16px;
        ::placeholder {
            color: var(--gray-3);
        }
    }
    &.secondary {
        background-color: var(--white-1-12);
        border: 1px solid var(--darkblue-1);
        color: var(--darkblue-1);
        border-radius: 5px;
        padding: 9px 16px;
        ::placeholder {
            color: var(--gray-2);
        }
    }
`;
type TextAreaProps = {
    onChange: any;
};
export const TextArea = styled.textarea<TextAreaProps>`
    outline: none;
    border-radius: inherit;
    width: 100%;
    transition: 0.3s;
    border: 0;
    background-color: transparent;
    color: inherit;
    resize: none;
    min-height: 80px;
    ::placeholder {
        user-select: none;
    }
`;
export const MaxLength = styled.span`
    width: 100%;
    text-align: right;
    font-size: 14px;
`;
