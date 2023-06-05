import { ProjectTaskBoard } from "../../../entities/projectTasks/entities";

export default class WSTaskBoardsHandler {
    //#region Attributes
    private readonly taskBoardList: Map<number, ProjectTaskBoard>;
    //#endregion
    constructor() {
        this.taskBoardList = new Map<number, ProjectTaskBoard>();
    }
    //#region Methods
    public getTaskBoardByProject(projectId: number): ProjectTaskBoard {
        return this.taskBoardList.get(projectId);
    }
    public removeTaskBoardByProjectId(projectId: number): void {
        this.taskBoardList.delete(projectId);
    }
    //#endregion
}