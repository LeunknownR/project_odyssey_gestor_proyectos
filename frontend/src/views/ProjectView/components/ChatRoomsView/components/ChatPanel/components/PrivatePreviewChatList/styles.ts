import styled from "styled-components";

export const ImageWrapper = styled.div`
    position: relative;
    ::after {
        content: "";
        position: absolute;
        top: 4px;
        right: 1px;
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        transition: 0.3s;
    }
    &.has-unread-chat::after {
        background-color: var(--red-2);
    }
`;
