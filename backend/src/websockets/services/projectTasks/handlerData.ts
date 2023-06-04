import { WSTaskListByState, WSUserDataProjectTaskService } from "./utils/entities";

export default class WSProjectTaskServiceDataHandler {
    private taskListByState: WSTaskListByState;
    private collaboratorListInProject: Map<number, number[]>;
    constructor() {
        this.taskListByState = {
            pending: [],
            onProgress: [],
            finalized: []
        };
        this.collaboratorListInProject = new Map();
    }
    public addTask(newTask: string): void {
    }
    public addCollaboratorInProject({
        projectId,
        userId
    }: WSUserDataProjectTaskService): void {
        const { collaboratorListInProject } = this;
        const prevUsersInCurrentProject = collaboratorListInProject.get(projectId);
        const newCollaboratorListInProject: number[] = 
            prevUsersInCurrentProject 
            ? [
                ...prevUsersInCurrentProject,
                userId
            ] : [userId];
        this.collaboratorListInProject.set(projectId, newCollaboratorListInProject);
    }
    public removeCollaboratorInProject(currentUserData: WSUserDataProjectTaskService): void {
        const { projectId } = currentUserData;
        const { collaboratorListInProject } = this;
        const prevUsersInCurrentProject: number[] = collaboratorListInProject.get(projectId);
        const newCollaboratorListInProject: number[] = 
            prevUsersInCurrentProject 
            ? prevUsersInCurrentProject.filter(userId => userId !== currentUserData.userId) 
            : [];
        this.collaboratorListInProject.set(projectId, newCollaboratorListInProject);
    }
}