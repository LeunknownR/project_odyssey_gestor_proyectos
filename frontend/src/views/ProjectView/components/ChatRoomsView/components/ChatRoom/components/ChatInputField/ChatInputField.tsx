import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { ChatInput, ChatInputContainer, IconContainer } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const ChatInputField = () => {
    return (
        <ChatInputContainer>
            <ChatInput />
            <IconContainer>
                <Icon icon="material-symbols:send" />
            </IconContainer>
        </ChatInputContainer>
    );
};

export default ChatInputField;
