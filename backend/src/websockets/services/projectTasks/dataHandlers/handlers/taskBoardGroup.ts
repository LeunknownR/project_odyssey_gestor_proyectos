import ProjectTaskBoard from "../../../../../entities/projectTask/ProjectTaskBoard";

export default class WSTaskBoardGroup {
    //#region Attributes
    // Diccionario { key: projectId, value: taskBoard }
    private taskBoardGroup: Map<number, ProjectTaskBoard>;
    //#endregion
    constructor() {
        this.taskBoardGroup = new Map<number, ProjectTaskBoard>();
    }
    //#region Methods
    public setTaskBoardProject(projectId: number, taskBoard: ProjectTaskBoard): void {
        this.taskBoardGroup.set(projectId, taskBoard);
    }
    public getTaskBoardByProject(projectId: number): ProjectTaskBoard {
        return this.taskBoardGroup.get(projectId);
    }
    public removeTaskBoardByProjectId(projectId: number): void {
        this.taskBoardGroup.delete(projectId);
    }
    //#endregion
}