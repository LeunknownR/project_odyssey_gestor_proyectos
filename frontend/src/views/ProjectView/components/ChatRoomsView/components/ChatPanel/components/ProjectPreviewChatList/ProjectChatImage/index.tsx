import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "./styles";
import { ProjectChatImageProps } from "./types";

const ProjectChatImage = ({ isLastMessageSeen = true }: ProjectChatImageProps) => {
    return (
        <Container className={isLastMessageSeen ? "" : "has-unread-chat"}>
            <Icon icon="eos-icons:project" />
        </Container>
    );
};

export default ProjectChatImage;
