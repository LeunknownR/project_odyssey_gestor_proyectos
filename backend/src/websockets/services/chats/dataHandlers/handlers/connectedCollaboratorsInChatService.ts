import { WSConnectedCollaborator } from "../../utils/types";

export default class WSChatServiceConnectedCollaborators {
    //#region Attributes
    private collaboratorList: WSConnectedCollaborator[];
    //#endregion
    constructor() {
        this.collaboratorList = [];
    }
    //#region Methods
    forEach(iterate: (collaborator: WSConnectedCollaborator) => void): void {
        this.collaboratorList.forEach(iterate);
    }
    addCollaborator(collaborator: WSConnectedCollaborator): void {
        this.collaboratorList = [
            ...this.collaboratorList,
            collaborator
        ];
    }
    removeCollaborator(collaboratorSocketId: string): void {
        this.collaboratorList = this.collaboratorList
            .filter(({ socketId }) => socketId !== collaboratorSocketId);
    }
    isConnectedCollaborator(collaboratorId: number): boolean {
        return this
            .collaboratorList
            .some(({ id }) => id === collaboratorId);
    }
    //#endregion
}