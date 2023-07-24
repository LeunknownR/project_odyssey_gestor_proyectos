import NoProjectsImage from "src/images/no-projects.png";
import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import { NO_CHAT_SELECTED_TEST } from "./utils/constants";

const NoChatSelected = () => {
    return (
        <Container>
            <NoContent
                img={NoProjectsImage}
                title={NO_CHAT_SELECTED_TEST.title}
                subtitle={NO_CHAT_SELECTED_TEST.subtitle}
                titleColor="var(--white-1)"
            />
        </Container>
    );
};

export default NoChatSelected;
