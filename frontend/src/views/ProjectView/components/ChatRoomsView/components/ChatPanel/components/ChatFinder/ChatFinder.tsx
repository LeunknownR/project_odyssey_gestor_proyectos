import { ChatTextField } from "./styles";
import { ChatFinderProps } from "./types";

const ChatFinder = ({ searchChat, searchedChat }: ChatFinderProps) => {
    return (
        <ChatTextField
            onChange={searchChat}
            value={searchedChat}
            placeholder="¿A quién(es) estás buscando?"
            variant="primary-search"
        />
    );
};

export default ChatFinder;
