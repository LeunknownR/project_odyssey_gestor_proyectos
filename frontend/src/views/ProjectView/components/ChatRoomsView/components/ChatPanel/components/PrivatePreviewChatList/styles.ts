import styled from "styled-components";

export const ImageWrapper = styled.div`
    position: relative;
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
