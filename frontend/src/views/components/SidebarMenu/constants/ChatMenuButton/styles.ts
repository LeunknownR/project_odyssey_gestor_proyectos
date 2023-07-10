import { MenuButton } from "src/views/components/SidebarMenu/styles";
import styled from "styled-components";

export const ChatLinkButton = styled(MenuButton)`
    position: relative;
    .iconify {
        font-size: 37px;
        padding-top: 4px;
    }
    &.has-unread-chat {
        ::after {
            content: "";
            position: absolute;
            height: 8px;
            width: 8px;
            background-color: var(--red-2);
            top: 7px;
            left: 9px;
            border-radius: 100%;
        }
    }
`;