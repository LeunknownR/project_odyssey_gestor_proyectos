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
    &.primary,
    &.secondary {
        gap: 14px;
    }
    &.primary-search,
    &.secondary-search {
        gap: 7px;
    }
    @media (max-width: 600px) {
        max-width: unset;
        width: 100%;
    }
`;
export const LabelContent = styled.label`
    font-weight: 700;
    &.login {
        font-weight: 600;
        color: var(--white-1);
    }
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
    &.primary-search {
        color: var(--darkblue-1);
        font-size: 17px;
    }
    &.secondary-search {
        color: var(--white-1);
        font-size: 17px;
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
    margin-right: 5px;
    transition: 0.3s;
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
export const Content = styled.div`
    display: flex;
    align-items: center;
    border-radius: 3px;
    transition: 0.3s;
    &.login {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-2);
        :focus-within {
            background-color: #e15625cc;
            border: 1px solid var(--white-1);
            ::placeholder {
                color: var(--orange-1);
            }
            ${PasswordRevealer} {
                :hover {
                    background-color: var(--dark-3);
                }
                .iconify {
                    color: var(--white-1);
                }
            }
        }
        ::placeholder {
            color: var(--gray-3);
        }
    }
    &.primary {
        background-color: var(--white-1-12);
        border: 1px solid var(--white-1);
        color: var(--white-1);
        border-radius: 5px;
        font-size: 16px;
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
    &.primary-search {
        border-radius: 5px;
        border: 1px solid var(--darkblue-1);
        color: var(--darkblue-1);
        :focus-within {
            background-color: rgba(45, 90, 119, 0.2);
        }
        ::placeholder {
            color: var(--darkblue-1);
        }
    }
    &.secondary-search {
        border-radius: 5px;
        border: 1px solid var(--white-1);
        color: var(--white-1);
        background-color: rgba(45, 90, 119, 0.2);
    }
    &.header-search {
        border-radius: 8px;
        background-color: var(--darkblue-4);
        border: 1px solid var(--white-1-50);
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
    background-color: transparent;
    color: inherit;
    padding: 12px 10px;
    ::-ms-reveal {
        display: none;
    }
    ::placeholder {
        user-select: none;
    }
    &.primary,
    &.secondary {
        padding: 9px 16px;
    }
    &.primary-search {
        font-weight: 700;
        padding: 10px 15px;
        ::placeholder {
            color: var(--darkblue-1);
            font-weight: 400;
        }
    }
    &.secondary-search {
        font-weight: 700;
        ::placeholder {
            color: var(--gray-2);
            font-weight: 400;
        }
    }
    &.header-search {
        padding: 12px 14px;
    }
`;
export const LensContainer = styled.span`
    display: flex;
    margin: 0 30px 0 5px;
    .iconify {
        font-size: 20px;
    }
`;
