import { ProjectTaskBoard } from "../../../../../entities/projectTasks/entities";

export default class WSTaskBoardsHandler {
    //#region Attributes
    // Diccionario { key: projectId, value: taskBoard }
    private readonly taskBoardList: Map<number, ProjectTaskBoard>;
    //#endregion
    constructor() {
        this.taskBoardList = new Map<number, ProjectTaskBoard>();
    }
    //#region Methods
    public addTaskBoardProject(projectId: number, taskBoard: ProjectTaskBoard): void {
        this.taskBoardList.set(projectId, taskBoard);
    }
    public getTaskBoardByProject(projectId: number): ProjectTaskBoard {
        return this.taskBoardList.get(projectId);
    }
    public removeTaskBoardByProjectId(projectId: number): void {
        this.taskBoardList.delete(projectId);
    }
    //#endregion
}