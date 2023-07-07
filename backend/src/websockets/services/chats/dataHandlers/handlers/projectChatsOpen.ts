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
        if (!collaborators.includes(collaboratorToAddId)) {
            collaborators.push(collaboratorToAddId);
            this.collaboratorsInProjectChats.set(projectId, collaborators)
        }
        console.log(this.collaboratorsInProjectChats)
    }
    removeCollaboratorOfProjectChat(
        projectId: number,
        collaboratorToRemoveId: number
    ) {
        // Se obtienen los collaboradores excepto al que se sale del chat 
        const collaborators =
            this.collaboratorsInProjectChats
                .get(projectId)?.filter(
                    id => id !== collaboratorToRemoveId
                ) || [];
        // Verificar si existe colaborador en el chat
        if (collaborators.length === 0) {
            this.collaboratorsInProjectChats.delete(projectId);
        } else {
            this.collaboratorsInProjectChats.set(projectId, collaborators);
        }
        console.log(this.collaboratorsInProjectChats)
        /*  const newCollaborators: number[] = this.collaboratorsInProjectChats
             .get(projectId)
             .filter(id => id !== collaboratorToRemoveId);
         this.collaboratorsInProjectChats.set(projectId, newCollaborators);
         console.log(this.collaboratorsInProjectChats) */
    }
}