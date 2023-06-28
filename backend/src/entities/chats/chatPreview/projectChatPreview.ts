import { ProjectChatPreviewProject } from "./entities";
import { LastMessageChatPreview } from "./lastMessageChatPreview";

export class ProjectChatPreview {
    //#region Attributes
    readonly project: ProjectChatPreviewProject;
    readonly lastMessage: LastMessageChatPreview | null;
    //#endregion
    constructor(record: any) {
        this.project = {
            id: record["id_collaborator"],
            name: record["collaborator_name"]
        };
        this.lastMessage = new LastMessageChatPreview(record);
    }
};