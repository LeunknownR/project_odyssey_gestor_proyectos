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
        const collaborators = this.collaboratorsInPrivateChats.get(chatId) || [];
        if (!collaborators.includes(collaboratorToAddId)) {
            collaborators.push(collaboratorToAddId);
            this.collaboratorsInPrivateChats.set(chatId, collaborators);
        }
        console.log(this.collaboratorsInPrivateChats)
    }
    removeCollaboratorOfPrivateChat(
        chatId: string,
        collaboratorToRemoveId: number
    ): void {
        // Se obtienen los collaboradores excepto al que se sale del chat 
        const collaborators =
            this.collaboratorsInPrivateChats
                .get(chatId)?.filter(
                    id => id !== collaboratorToRemoveId
                ) || [];
        // Verificar si existe colaborador en el chat
        if (collaborators.length !== 0)
            // Se guarda la nueva lista de collaboradores en la memoria
            this.collaboratorsInPrivateChats.set(chatId, collaborators);
        // Se elimina el chat que no tiene colaboradores
        this.collaboratorsInPrivateChats.delete(chatId);
        console.log(this.collaboratorsInPrivateChats)
    }
    //#endregion
}