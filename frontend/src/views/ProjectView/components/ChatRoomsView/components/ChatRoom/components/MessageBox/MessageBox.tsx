import { ChangeEvent, useState } from "react";
import { CHAT_FIELD_PROPS } from "./constants";
import { ChatInput, ChatInputContainer, IconContainer } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const MessageBox = () => {
    const [messageText, setMessageText] = useState<string>("");
    const changeMessageText = ({
        target: { value },
    }: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(value);
    };
    return (
        <ChatInputContainer gap="15px" align="center;">
            <ChatInput
                {...CHAT_FIELD_PROPS}
                value={messageText}
                onChange={changeMessageText}
                characterCounter={false}
            />
            <IconContainer>
                <Icon icon="material-symbols:send" />
            </IconContainer>
        </ChatInputContainer>
    );
};

export default MessageBox;
