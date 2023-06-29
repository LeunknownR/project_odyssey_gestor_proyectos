import { ProjectChatPreviewProject } from "../entities";
import { LastMessageChatPreview } from "./lastMessageChatPreview";
import { LastMessageProjectChatPreview } from "./lastMessageProjectChatPreview";

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
        this.lastMessage = new LastMessageProjectChatPreview(record);
    }
};