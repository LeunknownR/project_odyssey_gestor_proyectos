import { Container, Tab } from "./styles";
import { TABS_CONTENT } from "./constants";
import { ChatTabsProps } from "./types";

const ChatTabs = ({ isNewChat }: ChatTabsProps) => {
    //GNOMO Preguntar cómo va a venir ese aviso de que hay un chat sin revisar (bolaroja)
    return (
        <Container width="100%">
            {TABS_CONTENT.map(({ text }) =>
                <Tab className={isNewChat ? "new-chat" : ""} key={text}>
                    {text}
                </Tab>
            )}
        </Container>
    );
};

export default ChatTabs;
