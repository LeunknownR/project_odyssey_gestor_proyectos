import { MenuButton } from "src/views/components/SidebarMenu/styles";
import styled from "styled-components";

export const ChatLinkButton = styled(MenuButton)`
    position: relative;
    .iconify {
        font-size: 32px;
        padding-top: 4px;
    }
    ::after {
        content: "";
        position: absolute;
        top: 12%;
        left: 15%;
        display: block;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        transition: 0.2s;
    }
    &.has-unread-chat::after {
        background-color: var(--red-2);
    }
`;