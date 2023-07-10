import { ProjectChatPreviewProject } from "../entities";
import LastMessageProjectChatPreview from "./lasstMessageProjectChatPreview";

export class ProjectChatPreview {
    //#region Attributes
    readonly project: ProjectChatPreviewProject;
    readonly lastMessage: LastMessageProjectChatPreview | null;
    //#endregion
    constructor(record: any) {
        this.project = {
            id: record["id_project"],
            name: record["project_name"]
        };
        const senderId: number | null = record["last_message_id_sender"];
        this.lastMessage = senderId 
            ? new LastMessageProjectChatPreview(record) 
            : null;
    }
};