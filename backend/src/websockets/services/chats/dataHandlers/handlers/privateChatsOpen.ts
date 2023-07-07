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
        // Verificando si no existe la lista de colaboradores
        if (!this.collaboratorsInPrivateChats.has(chatId)) {
            // Agregando lista vacía
            this.collaboratorsInPrivateChats.set(chatId, [collaboratorToAddId]);
            return;
        }
        // Agregando colaborador a la lista
        const collaborators: number[] = this.collaboratorsInPrivateChats.get(chatId);
        if (!collaborators || collaborators.includes(collaboratorToAddId)) return;
        collaborators.push(collaboratorToAddId);
    }
    removeCollaboratorOfPrivateChat(
        chatId: string,
        collaboratorToRemoveId: number
    ): void {
        if (!this.collaboratorsInPrivateChats.has(chatId)) return;
        // Obteniendo la lista de colaboradores con el chat del proyecto abierto
        const currentCollaborators: number[] = this.collaboratorsInPrivateChats.get(chatId);
        // Si queda 1, es el último y se elimina la lista completa
        if (currentCollaborators.length === 1) {
            this.collaboratorsInPrivateChats.delete(chatId);
            return;
        }
        // Sino se elimina solo ese colaborador de la lista
        const newCollaborators = this.collaboratorsInPrivateChats
            .get(chatId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInPrivateChats.set(
            chatId, newCollaborators
        );
    }
    //#endregion
}