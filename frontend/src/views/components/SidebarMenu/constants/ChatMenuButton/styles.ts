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
        display: block;
        position: absolute;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        transition: 2s;
    }
    &.has-unread-chat {
        ::after {
            background-color: var(--red-2);
            top: 12%;
            left: 12%;
        }
    }
`;