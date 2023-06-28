import ChatMessage from "./chatMessage";

export default class PrivateChatMessage extends ChatMessage {
    constructor(record: any) {
        super(record, "id_private_chat_message");
    }
}