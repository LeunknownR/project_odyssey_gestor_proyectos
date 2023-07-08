import { useEffect, useState } from "react";
import { ChatTextField } from "./styles";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { ChatFinderProps } from "./types";

const ChatFinder = ({ chatTab }: ChatFinderProps) => {
    const [searchedChat, setSearchedChat] = useState("");
    const { socketIoChatService } = useChatServiceContext();
    useEffect(() => {
        const test: any = {
            searchedChat,
            chatTab,
        };
        socketIoChatService?.emit(WSChatServiceEvents.Collaborator.SearchChat, test);
    }, [chatTab]);
    return (
        <ChatTextField
            placeholder="¿A quién(es) estás buscando?"
            variant="primary-search"
        />
    );
};

export default ChatFinder;
