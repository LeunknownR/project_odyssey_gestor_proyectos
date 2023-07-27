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
    setTaskBoardProject(projectId: number, taskBoard: ProjectTaskBoard): void {
        this.taskBoardGroup.set(projectId, taskBoard);
    }
    existsTaskBoardProject(projectId: number): boolean {
        return this.taskBoardGroup.has(projectId);
    }
    getTaskBoardByProject(projectId: number): ProjectTaskBoard {
        return this.taskBoardGroup.get(projectId);
    }
    removeTaskBoardByProjectId(projectId: number): void {
        this.taskBoardGroup.delete(projectId);
    }
    //#endregion
}