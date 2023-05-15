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
    &.primary {
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
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    border-radius: 3px;
    transition: 0.3s;
    padding: 12px 10px;
    &.primary {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-2);
        border-radius: 5px;
        padding: 10px 16px; 
        ::placeholder {
            color: var(--gray-3);
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
