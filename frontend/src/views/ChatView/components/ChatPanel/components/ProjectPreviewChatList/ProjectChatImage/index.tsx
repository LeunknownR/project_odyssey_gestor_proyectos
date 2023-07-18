import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "./styles";
import { ProjectChatImageProps } from "./types";

const ProjectChatImage = ({ isUnreadChat = false }: ProjectChatImageProps) => {
    return (
        <Container className={isUnreadChat ? "has-unread-chat" : ""}>
            <Icon icon="eos-icons:project" />
        </Container>
    );
};

export default ProjectChatImage;
