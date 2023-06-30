export abstract class WSChatServiceRoom {
    static getCollaboratorChatRoom(collaboratorId: number) {
        return `collaborator-chat:${collaboratorId}`;
    }
    
    static getProjectChatRoom(projectId: number) {
        return `project-chat:${projectId}`;
    }
}