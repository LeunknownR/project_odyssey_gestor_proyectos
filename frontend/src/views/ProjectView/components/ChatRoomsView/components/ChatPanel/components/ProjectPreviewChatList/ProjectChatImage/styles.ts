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
    &.has-unread-chat {
        ::after {
            content: "";
            position: absolute;
            height: 10px;
            width: 10px;
            background-color: var(--red-2);
            top: 4px;
            right: 1px;
            border-radius: 100%;
        }
    }
`;