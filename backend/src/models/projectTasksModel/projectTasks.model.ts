import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { WSNewProjectTask, WSNewProjectTaskForm, WSProjectTaskForm, WSProjectTaskToBeUpdatedForm } from "../../websockets/services/projectTasks/utils/entities";

export default abstract class ProjectTasksModel {
    static async getTaskPriorities(): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskPriorities,
            []);
        return resultset;
    }
    static async getTaskBoardByProjectId(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskBoard,
            [projectId]);
        return resultset;
    }
    static async createTask({
        collaboratorId,
        projectId, task
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
    static async updateTask({
        projectId, task, collaboratorId
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
}