import ChatMessage from "./chatMessage";

export default class ProjectChatMessage extends ChatMessage {
    constructor(record: any) {
        super(record, "id_project_chat_message");
    }
}