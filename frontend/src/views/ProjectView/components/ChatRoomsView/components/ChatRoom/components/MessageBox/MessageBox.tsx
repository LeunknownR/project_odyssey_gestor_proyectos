import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { CHAT_FIELD_PROPS } from "./constants";
import { ChatInput, ChatInputContainer, IconContainer } from "./styles";
import { MessageBoxProps } from "./types";

const MessageBox = ({ emitMessageEvent }: MessageBoxProps) => {
    const [messageText, setMessageText] = useState<string>("");
    const changeMessageText = ({
        target: { value },
    }: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(value);
    };
    const isValidMessage = (): boolean => {
        return messageText.trim().length > 0;
    }
    const sendMessage = () => {
        if (!messageText.trim()) return;
        emitMessageEvent(messageText);
        setMessageText("");
    };
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (isValidMessage()) sendMessage();
            return;
        }
    }
    return (
        <ChatInputContainer gap="15px" align="center">
            <ChatInput
                {...CHAT_FIELD_PROPS}
                value={messageText}
                onChange={changeMessageText}
                onKeyDown={onKeyDownHandler}
                characterCounter={false}
            />
            <IconContainer onClick={sendMessage}>
                <Icon icon="material-symbols:send" />
            </IconContainer>
        </ChatInputContainer>
    );
};

export default MessageBox;
