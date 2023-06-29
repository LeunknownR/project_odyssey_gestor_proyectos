import { bufferToBoolean } from "../../../db/helpers";

export class LastMessageProjectChatPreview {
    readonly datetime: number;
    readonly message: string;
    readonly senderId: number;
    readonly collaboratorListWhoHaveSeen: number[];
    constructor(record: any) {
        this.senderId = record["last_message_id_sender"];
        this.datetime = record["last_message_datetime"].getTime();
        this.message = record["last_message"];
        this.collaboratorListWhoHaveSeen = (record["id_project_team_member_seen_message"]);
    }  
}