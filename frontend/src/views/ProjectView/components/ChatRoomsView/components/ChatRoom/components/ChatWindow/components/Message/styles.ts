import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    padding: 10px 20px;
    max-width: 70%;
    background-color: var(--darkblue-4);
    border-radius: 7px 7px 7px 0px;
    min-width: 25%;
    width: fit-content;
    color: white;
    &.my-message {
        background-color: var(--darkblue-0);
        border-radius: 7px 7px 0 7px;
        align-self: flex-end;
    }
`;
export const Sender = styled.h5`
    font-size: 14px;
    &.my-message {
        display: none;
    }
`;
export const Text = styled.p`
    color: var(--darkblue-0);
    font-size: 17px;
    &.my-message {
        color: var(--darkblue-2);
    }
`;
export const Timestamp = styled.label`
    align-self: flex-end;
    color: var(--darkblue-0);
    font-size: 12px;
    font-weight: 400;
    &.my-message {
        color: var(--darkblue-2);
    }
`;