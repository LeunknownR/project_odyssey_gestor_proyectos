import { MenuButton } from "src/views/components/SidebarMenu/styles";
import styled from "styled-components";

export const ChatLinkButton = styled(MenuButton)`
    order: 1;
    position: relative;
    &.has-unread-chat {
        ::after {
            content: "";
            position: absolute;
            height: 8px;
            width: 8px;
            background-color: var(--red-2);
            top: 4px;
            left: 10px;
            border-radius: 100%;
        }
    }
`;