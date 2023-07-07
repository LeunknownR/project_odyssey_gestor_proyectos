export class WSOpenProjectChats {
    private collaboratorsInProjectChats: Map<number, number[]>;
    constructor() {
        this.collaboratorsInProjectChats = new Map<number, number[]>();
    }
    addCollaboratorToProjectChat(
        projectId: number,
        collaboratorToAddId: number
    ): void {
        const collaborators = this.collaboratorsInProjectChats.get(projectId) || [];
        if (collaborators.includes(collaboratorToAddId)) return;
        collaborators.push(collaboratorToAddId);
    }
    removeCollaboratorOfProjectChat(
        projectId: number,
        collaboratorToRemoveId: number
    ) {
        if (!this.collaboratorsInProjectChats.has(projectId)) return;
        // Obteniendo la lista de colaboradores con el chat del proyecto abierto
        const currentCollaborators: number[] = this.collaboratorsInProjectChats.get(projectId);
        // Si queda 1, es el último y se elimina la lista completa
        if (currentCollaborators.length === 1) {
            this.collaboratorsInProjectChats.delete(projectId);
            console.log(this.collaboratorsInProjectChats.get(projectId));
            return;
        }
        // Sino se elimina solo ese colaborador de la lista
        const newCollaborators = this.collaboratorsInProjectChats
            .get(projectId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInProjectChats.set(
            projectId, newCollaborators
        );
        console.log(this.collaboratorsInProjectChats.get(projectId));
    }
}