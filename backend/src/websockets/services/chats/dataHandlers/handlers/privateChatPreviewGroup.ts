import { PrivateChatPreview } from "../../../../../entities/chats/chatPreview/privateChatPreview";

export default class WSPrivateChatPreviewGroup {
    //#region Attributes
    // Diccionario { key: collaboratorId, value: privateChatPreview[] }
    private previewChatGroup: Map<number, PrivateChatPreview[]>;
    //#endregion
    //#region Methods
    getPreviewChat(collaboratorId: number): PrivateChatPreview[] {
        return this.previewChatGroup.get(collaboratorId);
    }
    addPreviewChat(collaboratorId: number, previewChat: PrivateChatPreview[]): void {
        this.previewChatGroup.set(collaboratorId, previewChat);
    }
    //#endregion
}