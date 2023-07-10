import { LastMessageChatPreview } from "./lastMessageChatPreview";

export default class LastMessageProjectChatPreview extends LastMessageChatPreview {
    readonly senderFirstName: string;
    constructor(record: any) {
        super(record);
        this.senderFirstName = record["sender_first_name"];
    }
}