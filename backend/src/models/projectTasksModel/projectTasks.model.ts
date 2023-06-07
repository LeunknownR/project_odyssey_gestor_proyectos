import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { 
    WSNewProjectTaskForm, 
    WSProjectTaskCommentForm, 
    WSProjectTaskToBeUpdatedForm 
} from "../../websockets/services/projectTasks/utils/entities";

export default abstract class ProjectTasksModel {
    public static async getTaskPriorities(): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskPriorities,
            []);
        return resultset;
    }
    public static async getTaskBoardByProjectId(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskBoard,
            [projectId]);
        return resultset;
    }
    public static async createTask({
        collaboratorId,
        projectId, payload: task
    }: WSNewProjectTaskForm): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.CreateProjectTask,
            [
                projectId, task.name, 
                task.state, collaboratorId
            ]
        );
        return record;
    }
    public static async updateTask({
        projectId, payload: task, collaboratorId
    }: WSProjectTaskToBeUpdatedForm): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.UpdateProjectTask,
            [
                projectId, task.taskId, 
                task.responsibleId, task.name, 
                task.description, new Date(task.deadline), 
                task.priotityId, task.newSubTask.join(","), 
                task.subTaskIdsToBeDeleted.join(","), collaboratorId
            ]
        );
        return record;
    }
    public static async commentInTask({
        projectId,
        payload: comment,
        collaboratorId
    }: WSProjectTaskCommentForm): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.UpdateProjectTask,
            [
                projectId, 
                comment.taskId,
                comment.content,
                collaboratorId
            ]
        );
        return record;
    }
}