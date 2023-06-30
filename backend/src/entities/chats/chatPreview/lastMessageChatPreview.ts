import { bufferToBoolean } from "../../../db/helpers";

export class LastMessageChatPreview {
    readonly datetime: number;
    readonly message: string;
    readonly senderId: number;
    readonly seen: boolean;
    constructor(record: any) {
        this.senderId = record["last_message_id_sender"];
        this.datetime = record["last_message_datetime"].getTime();
        this.message = record["last_message"];
        this.seen = bufferToBoolean(record["seen"]);
    }
}