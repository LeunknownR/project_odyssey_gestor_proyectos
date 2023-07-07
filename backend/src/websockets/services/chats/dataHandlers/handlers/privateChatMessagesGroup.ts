import PrivateChatMessage from "../../../../../entities/chats/chatMessage/privateChatMessage";

export class WSPrivateChatMessagesGroup {
    //#region Attributes
    // Diccionario { key: "{collaboratorId1:collaboratorId2}", value: privateChatMessages }
    private chatMessages: Map<string, PrivateChatMessage[]>;
    constructor() {
        this.chatMessages = new Map<string, PrivateChatMessage[]>(); 
    }
    //#endregion
    //#region Methods
    static getChatId(collaborator1Id: number, collaborator2Id: number): string {
        if (collaborator2Id < collaborator1Id)
            return `${collaborator1Id}:${collaborator2Id}`;
        return `${collaborator2Id}:${collaborator1Id}`;
    }
    getPrivateChatMessageList(collaboratorId: number, collaboratorChatId: number): PrivateChatMessage[] {
        const chatId: string = WSPrivateChatMessagesGroup.getChatId(collaboratorId, collaboratorChatId);
        if (!this.chatMessages.has(chatId))
            return null;
        return this.chatMessages.get(chatId);
    }
    setPrivateChatMessageList(
        collaboratorId: number, 
        collaboratorChatId: number,
        chatMessages: PrivateChatMessage[]
    ): void {
        const chatId: string = WSPrivateChatMessagesGroup.getChatId(collaboratorId, collaboratorChatId);
        this.chatMessages.set(chatId, chatMessages);
    }
    addMessage(
        privateChatMessage: PrivateChatMessage, 
        receiverId: number
    ): void {
        const chatId: string = WSPrivateChatMessagesGroup.getChatId(
            privateChatMessage.collaboratorId, 
            receiverId
        );
        this.chatMessages
            .get(chatId)
            .push(privateChatMessage);
    }
    //#endregion
}