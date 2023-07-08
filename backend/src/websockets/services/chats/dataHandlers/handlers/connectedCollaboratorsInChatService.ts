export default class WSChatServiceConnectedCollaborators {
    //#region Attributes
    private collaboratorIdList: number[];
    //#endregion
    constructor() {
        this.collaboratorIdList = [];
    }
    //#region Methods
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
    isConnectedCollaborator(collaboratorId: number): boolean {
        return this.collaboratorIdList.includes(collaboratorId);
    }
    //#endregion
}