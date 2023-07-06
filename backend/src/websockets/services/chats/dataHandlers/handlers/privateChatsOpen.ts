export class WSOpenPrivateChats {
    //#region Attributes
    // Diccionario { key: chatId, value: collaboratorId[] }
    private collaboratorsInPrivateChats: Map<string, number[]>;

    constructor() {
        this.collaboratorsInPrivateChats = new Map<string, number[]>();
    }
    //#endregion
    //#region Methods
    addCollaboratorToPrivateChat(
        chatId: string,
        collaboratorToAddId: number
    ): void {
        if (!this.collaboratorsInPrivateChats.has(chatId)) {
            this.collaboratorsInPrivateChats.set(chatId, []);
        }
        this.collaboratorsInPrivateChats.get(chatId)?.push(collaboratorToAddId);
    }
    removeCollaboratorOfPrivateChat(
        chatId: string,
        collaboratorToRemoveId: number
    ) {
        const newCollaborators: number[] = this.collaboratorsInPrivateChats
            .get(chatId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInPrivateChats.set(chatId, newCollaborators);
    }
    //#endregion
}