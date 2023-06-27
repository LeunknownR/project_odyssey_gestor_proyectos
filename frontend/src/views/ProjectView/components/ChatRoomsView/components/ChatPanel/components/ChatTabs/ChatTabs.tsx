import { Container, Tab } from "./styles";
import { TABS_CONTENT } from "./constants";

const ChatTabs = () => {
    return (
        <Container width="100%">
            {TABS_CONTENT.map(({text}) => <Tab key={text}>{text}</Tab>)}
        </Container>
    );
};

export default ChatTabs;
