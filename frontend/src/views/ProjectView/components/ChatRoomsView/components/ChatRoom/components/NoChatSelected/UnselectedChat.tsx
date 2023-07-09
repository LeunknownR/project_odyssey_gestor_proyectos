import NoProjectsImage from "src/images/no-projects.png";
import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import { UNSELECTED_CHAT_PROPS } from "./utils/constants";

const UnselectedChat = () => {
    return (
        <Container>
            <NoContent img={NoProjectsImage} {...UNSELECTED_CHAT_PROPS} />
        </Container>
    );
};

export default UnselectedChat;
