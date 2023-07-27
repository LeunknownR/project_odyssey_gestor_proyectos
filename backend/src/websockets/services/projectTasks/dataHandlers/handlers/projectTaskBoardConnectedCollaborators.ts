import { WSUserDataProjectTaskService } from "../../utils/entities";

export default class WSProjectTaskBoardConnectedCollaborators {
    //#region Attributes
    // Diccionario { key: projectId, value: collabortarUserIdList }
    private connectedCollaboratorListInProject: Map<number, number[]>;
    //#endregion
    constructor() {
        this.connectedCollaboratorListInProject = new Map<number, number[]>();
    }
    //#region Methods
    getCountConnectedCollaborators(projectId: number): number {
        return this.connectedCollaboratorListInProject
            .get(projectId)
            .length;
    }
    getProjectIdsWhereCollaboratorIs(collaboratorId: number): number[] {
        const projectIds: number[] = [...this.connectedCollaboratorListInProject]
            .filter(([_, collaboratorsIds]) => collaboratorsIds.includes(collaboratorId))
            .map(([projectId]) => projectId);
        return projectIds;
    }
    addCollaborator({
        projectId,
        userId
    }: WSUserDataProjectTaskService): void {
        const { connectedCollaboratorListInProject: collaboratorListInProject } = this;
        const prevUsersInCurrentProject = collaboratorListInProject.get(projectId);
        const newCollaboratorListInProject: number[] = 
            prevUsersInCurrentProject 
            ? [
                ...prevUsersInCurrentProject,
                userId
            ] : [userId];
        this.connectedCollaboratorListInProject.set(projectId, newCollaboratorListInProject);
    }
    removeCollaborator(currentUserData: WSUserDataProjectTaskService): void {
        const { projectId } = currentUserData;
        const { connectedCollaboratorListInProject: collaboratorListInProject } = this;
        const prevUsersInCurrentProject: number[] = collaboratorListInProject.get(projectId);
        const newCollaboratorListInProject: number[] = 
            prevUsersInCurrentProject 
            ? prevUsersInCurrentProject.filter(userId => userId !== currentUserData.userId) 
            : [];
        this.connectedCollaboratorListInProject.set(projectId, newCollaboratorListInProject);
    }
    //#endregion
}