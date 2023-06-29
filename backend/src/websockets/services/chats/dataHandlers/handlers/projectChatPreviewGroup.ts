import { ProjectChatPreview } from "../../../../../entities/chats/chatPreview/projectChatPreview";

export default class WSProjectChatPreviewGroup {
    //#region Attributes
    // Diccionario { key: collaboratorId, value: projectChatPreview[] }
    private previewChatGroup: Map<number, ProjectChatPreview[]>;
    //#endregion
    //#region Methods
    getPreviewChat(projectId: number): ProjectChatPreview[] {
        return this.previewChatGroup.get(projectId);
    }
    addPreviewChat(projectId: number, previewChat: ProjectChatPreview[]): void {
        this.previewChatGroup.set(projectId, previewChat);
    }
    //#endregion
}