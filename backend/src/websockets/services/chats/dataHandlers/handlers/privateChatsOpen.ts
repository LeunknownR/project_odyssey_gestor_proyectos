export class WSOpenPrivateChats {
    //#region Attributes
    // Diccionario { key: chatId, value: collaboratorId[] }
    private collaboratorsInPrivateChats: Map<string, number[]>;
    //#endregion
    //#region Methods
    addCollaboratorToPrivateChat(
        chatId: string,
        collaboratorToAddId: number
    ): void {
        this.collaboratorsInPrivateChats
            .get(chatId)
            .push(collaboratorToAddId);
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