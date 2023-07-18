import FormattedProjectChatMessages from "../../../../../entities/chats/chatMessage/formattedProjectChatMessage";
import ProjectChatMessage from "../../../../../entities/chats/chatMessage/projectChatMessage";

export class WSProjectChatMessagesGroup {
    //#region Attributes
    // Diccionario { key: collaboratorId, value: formattedProjectChatMessages }
    private chatMessages: Map<number, FormattedProjectChatMessages>;
    //#endregion
    constructor() {
        this.chatMessages = new Map<number, FormattedProjectChatMessages>();
    }
    //#region Methods
    getFormattedProjectChatMessages(projectId: number): FormattedProjectChatMessages {
        if (!this.chatMessages.has(projectId))
            return null;
        return this.chatMessages.get(projectId);
    }
    setFormattedProjectChatMessages(
        projectId: number,
        formattedProjectChatMessages: FormattedProjectChatMessages
    ): void {
        this.chatMessages.set(projectId, formattedProjectChatMessages);
    }
    addMessage(
        projectId: number,
        projectChatMessage: ProjectChatMessage
    ): void {
        // Se realiza una busqueda de mensajes pertenecientes a un ID especifico 
        const messages: ProjectChatMessage[] =
            this.chatMessages
                .get(projectId).messages;
        messages.push(projectChatMessage);
    }
    //#endregion
}