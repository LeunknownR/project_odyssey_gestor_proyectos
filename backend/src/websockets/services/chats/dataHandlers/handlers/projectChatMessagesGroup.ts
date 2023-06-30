import FormattedProjectChatMessages from "../../../../../entities/chats/chatMessage/formattedProjectChatMessage";

export class WSProjectChatMessagesGroup {
    //#region Attributes
    // Diccionario { key: collaboratorId, value: formattedProjectChatMessages }
    private chatMessages: Map<number, FormattedProjectChatMessages>;
    //#endregion
    //#region Methods
    getProjectChatMessageList(projectId: number): FormattedProjectChatMessages {
        if (!this.chatMessages.has(projectId))
            return null;
        return this.chatMessages.get(projectId);
    }
    setProjectChatMessageList(
        projectId: number,
        formattedProjectChatMessages: FormattedProjectChatMessages
    ): void {
        this.chatMessages.set(projectId, formattedProjectChatMessages);
    }
    //#endregion
}