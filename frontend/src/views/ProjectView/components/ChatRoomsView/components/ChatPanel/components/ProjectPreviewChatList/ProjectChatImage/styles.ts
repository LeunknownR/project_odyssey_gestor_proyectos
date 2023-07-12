import styled from 'styled-components';

export const Container = styled.span`
    position: relative;
    .iconify {
        padding: 5px;
        border-radius: 50%;
        color: var(--white-1);
        font-size: 56px;
        background-color: var(--green-1);
    }
    ::after {
        content: "";
        position: absolute;
        top: 4px;
        right: 1px;
        display: block;
        height: 10px;
        width: 10px;
        transition: 0.3s;
        border-radius: 100%;
    }
    &.has-unread-chat::after {
        background-color: var(--red-2);
    }
`;