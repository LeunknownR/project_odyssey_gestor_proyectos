export class WSOpenProjectChats {
    private collaboratorsInProjectChats: Map<number, number[]>;
    addCollaboratorToProjectChat(
        projectId: number,
        collaboratorToAddId: number
    ): void {
        this.collaboratorsInProjectChats
            .get(projectId)
            .push(collaboratorToAddId);
    }
    removeCollaboratorOfProjectChat(
        projectId: number,
        collaboratorToRemoveId: number
    ) {
        const newCollaborators: number[] = this.collaboratorsInProjectChats
            .get(projectId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInProjectChats.set(projectId, newCollaborators);
    }
}