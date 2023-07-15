import { Icon } from "@iconify/react/dist/iconify.js";
import { ChatLinkButton } from "./styles";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import { AbsolutePaths } from "src/config/absolutePaths";

const ChatMenuButton = () => {
    const { hasUnreadPrivateChats, hasUnreadProjectChats } = useChatServiceContext();
    const getClassName = ({ isActive }: ({ isActive: boolean })): string => {
        const classList: string[] = [];
        if (hasUnreadProjectChats || hasUnreadPrivateChats) 
            classList.push("has-unread-chat");
        if (isActive)
            classList.push("active");
        return classList.join(" ");
    }
    return (
        <ChatLinkButton
            to={AbsolutePaths.Chat}
            className={getClassName}>
            <span>
                <Icon icon="grommet-icons:chat" />
            </span>
        </ChatLinkButton>
    );
};

export default ChatMenuButton;
