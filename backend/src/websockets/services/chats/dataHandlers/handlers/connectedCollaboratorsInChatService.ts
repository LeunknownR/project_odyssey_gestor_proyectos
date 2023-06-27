export default class WSChatServiceConnectedCollaborators {
    private collaboratorIdList: number[];
    constructor() {
        this.collaboratorIdList = [];
    }
    addCollaborator(collaboratorId: number): void {
        this.collaboratorIdList = [
            ...this.collaboratorIdList,
            collaboratorId
        ];
    }
    removeCollaborator(collaboratorId: number): void {
        this.collaboratorIdList = this.collaboratorIdList
            .filter(id => id !== collaboratorId);
    }
}