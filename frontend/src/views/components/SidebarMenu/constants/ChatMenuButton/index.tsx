import { Icon } from "@iconify/react/dist/iconify.js";
import { DBRoles } from "src/config/roles";
import useUserRole from "src/storage/hooks/useUserRole";
import { ChatLinkButton } from "./styles";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import { AbsolutePaths } from "src/config/absolutePaths";

const ChatMenuButton = () => {
    const userRole = useUserRole();
    const { hasUnreadPrivateChats, hasUnreadProjectChats } = useChatServiceContext();
    if (userRole === DBRoles.GeneralAdmin) return null;
    return (
        <ChatLinkButton
            to={AbsolutePaths.Chat}
            activeclassname="active"
            className={(hasUnreadProjectChats || hasUnreadPrivateChats) ? "has-unread-chat" : ""}>
            <span>
                <Icon icon="grommet-icons:chat" />
            </span>
        </ChatLinkButton>
    );
};

export default ChatMenuButton;
