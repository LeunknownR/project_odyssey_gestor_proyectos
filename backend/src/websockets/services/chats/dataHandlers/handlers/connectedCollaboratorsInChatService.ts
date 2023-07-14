export default class WSChatServiceConnectedCollaborators {
    //#region Attributes
    private collaboratorIdList: number[];
    //#endregion
    constructor() {
        this.collaboratorIdList = [];
    }
    //#region Methods
    forEach(iterate: (collaboratorId: number) => void): void {
        this.collaboratorIdList.forEach(iterate);
    }
    addCollaborator(collaboratorId: number): void {
        if (this.collaboratorIdList.includes(collaboratorId)) return;
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