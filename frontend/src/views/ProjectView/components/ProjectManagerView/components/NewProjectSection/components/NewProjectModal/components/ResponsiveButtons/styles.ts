import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;
type ButtonProps = {
    onClick: any;
}
export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: var(--darkblue-2);
    padding: 10px 15px;
    cursor: pointer;
    .iconify {
        color: var(--white-1);
        font-size: 20px;
    }
    :disabled {
        background-color: var(--darkblue-6)
    }
    &.back {
        border-radius: 10px 0 0 10px;
        .iconify {
            rotate: -135deg;
        }
    }
    &.next {
        border-radius: 0 10px 10px 0;
        .iconify {
            rotate: 45deg;
        }
    }
`;
