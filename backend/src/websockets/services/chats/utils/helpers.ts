export abstract class WSChatServiceRoom {
    static getCollaboratorChatRoom(collaboratorId: number) {
        return `collaborator-chat:${collaboratorId}`;
    }
}