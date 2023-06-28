export abstract class WSChatServiceRoom {
    public static getCollaboratorChatRoom(collaboratorId: number) {
        return `collaborator-chat:${collaboratorId}`;
    }
}