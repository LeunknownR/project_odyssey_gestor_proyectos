import { ChatTextField, CleanChatBtn, Container } from "./styles";
import { ChatFinderProps } from "./types";

const ChatFinder = ({ 
    searchChat, 
    searchedChat, 
    clearSearchedChat 
}: ChatFinderProps) => {
    return (
        <Container>
            <ChatTextField
                onChange={searchChat}
                value={searchedChat}
                placeholder="¿A quién(es) estás buscando?"
                variant="primary-search"
            />
            {searchedChat && 
            <CleanChatBtn onClick={clearSearchedChat} icon="mdi:close" />}
        </Container>
    );
};

export default ChatFinder;
