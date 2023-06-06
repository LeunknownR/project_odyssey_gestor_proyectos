import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { WSNewProjectTask, WSNewProjectTaskForm } from "../../websockets/services/projectTasks/utils/entities";

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
        projectId, newTask
    }: WSNewProjectTaskForm): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.CreateProjectTask,
            [
                projectId, newTask.name, 
                newTask.state, collaboratorId
            ]
        );
        return record;
    }
}