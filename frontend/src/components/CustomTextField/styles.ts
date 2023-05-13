//#region Libraries
import styled from "styled-components";
//#endregion
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
    @media (max-width: 600px) {
        max-width: unset;
        width: 100%;
    }
`;
export const LabelContent = styled.label`
    font-weight: 600;
    transition: 0.3s;
    &.primary {
        color: var(--white-1);
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid var(--dark-3);
    border-radius: 3px;
    transition: 0.3s;
    padding: 12px 10px;
    &.primary {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-2);
        :focus {
            background-color: #e15625cc;
            border: 1px solid var(--white-1);
            ::placeholder {
                color: var(--orange-1);
            }
        }
        ::placeholder {
            color: var(--gray-3);
        }
    }
    &.primary-search {
        border-radius: 8px;
        background-color: var(--darkblue-4);
        border: 1px solid var(--white-1-50);
        padding: 8px 10px;
        color: var(--white-1);
    }
    /* &.disabled {
        border-color: var(--light-3);
        background-color: var(--light-1);
    } */
`;
export const TextField = styled.input`
    outline: none;
    border-radius: inherit;
    width: 100%;
    transition: 0.3s;
    border: 0;
    background-color: inherit;
    color: inherit;
    ::-ms-reveal {
        display: none;
    }
    ::placeholder {
        user-select: none;
    }
`;
export const PasswordRevealer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
    user-select: none;
    :hover {
        background-color: #f3f2f3;
    }
    :active {
        background-color: #d8d9d8;
    }
    .iconify {
        color: var(--dark-3);
        font-size: 20px;
    }
`;
export const LensContainer = styled.span`
    display: flex;    
    padding: 2px 13px;
    margin-right: 10px;
    .iconify {
        font-size: 20px;
        color: var(--white-1);
    }
`;
