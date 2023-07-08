export class WSOpenProjectChats {
    //#region Attributes
    private collaboratorsInProjectChats: Map<number, number[]>;
    //#endregion
    constructor() {
        this.collaboratorsInProjectChats = new Map<number, number[]>();
    }
    //#region Methods
    addCollaboratorToProjectChat(
        projectId: number,
        collaboratorToAddId: number
    ): void {
        // Verificando si no existe la lista de colaboradores
        if (!this.collaboratorsInProjectChats.has(projectId)) {
            // Agregando lista vacía
            this.collaboratorsInProjectChats.set(projectId, [collaboratorToAddId]);
            return;
        }
        // Agregando colaborador a la lista
        const collaborators: number[] = this.collaboratorsInProjectChats.get(projectId);
        if (!collaborators || collaborators.includes(collaboratorToAddId)) return;
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
            return;
        }
        // Sino se elimina solo ese colaborador de la lista
        const newCollaborators = this.collaboratorsInProjectChats
            .get(projectId)
            .filter(id => id !== collaboratorToRemoveId);
        this.collaboratorsInProjectChats.set(
            projectId, newCollaborators
        );
    }
    //#endregion
}