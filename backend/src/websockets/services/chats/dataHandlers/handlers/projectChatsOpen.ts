export class WSOpenProjectChats {
    private collaboratorsInProjectChats: Map<string, number[]>;
    addCollaboratorToProjectChat(
        chatId: string,
        collaboratorToAddId: number
    ): void {
        this.collaboratorsInProjectChats
            .get(chatId)
            .push(collaboratorToAddId);
    }
    removeCollaboratorOfProjectChat(
        chatId: string,
        collaboratorToRemoveId: number
    ) {
        const newCollaborators: number[] = this.collaboratorsInProjectChats
            .get(chatId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInProjectChats.set(chatId, newCollaborators);
    }
}