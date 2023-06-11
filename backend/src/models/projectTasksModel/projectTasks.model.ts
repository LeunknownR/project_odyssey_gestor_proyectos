import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { 
    WSProjectTaskToBeChangedStateForm,
    WSProjectTaskToBeDeletedForm,
    WSNewProjectTaskForm, 
    WSProjectTaskCommentForm, 
    WSProjectTaskMainInformationForm, 
    WSProjectTaskForm,
    WSNewProjectSubtaskForm
} from "../../websockets/services/projectTasks/utils/entities";

export default abstract class ProjectTasksModel {
    public static async getTaskPriorities(): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskPriorities,
            []);
        return resultset;
    }
    public static async getTaskBoardByProjectId({
        projectId, collaboratorId
    }: WSProjectTaskForm): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskBoard,
            [projectId, collaboratorId]);
        return resultset;
    }
    public static async createTask({
        collaboratorId,
        projectId, payload: task
    }: WSNewProjectTaskForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateProjectTask,
            [
                projectId, 
                collaboratorId,
                task.name,
                task.state
            ]
        );
        return record;
    }
    public static async updateTaskMainInformation({
        projectId, 
        payload: taskMainInformation, 
        collaboratorId
    }: WSProjectTaskMainInformationForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.UpdateProjectTaskMainInformation,
            [
                projectId, 
                collaboratorId,
                taskMainInformation.taskId,
                taskMainInformation.responsibleId, 
                taskMainInformation.name,
                taskMainInformation.description, 
                new Date(taskMainInformation.deadline),
                taskMainInformation.priotityId
            ]
        );
        return record;
    }
    static async createSubtask({
        collaboratorId,
        payload: newSubtask,
        projectId
    }: WSNewProjectSubtaskForm) {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateProjectSubtask,
            [
                projectId, 
                collaboratorId,
                newSubtask.taskId,
                newSubtask.name,
            ]
        );
        return record;
    }
    static async changeTaskState({
        projectId,
        payload: task,
        collaboratorId
    }: WSProjectTaskToBeChangedStateForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.ChangeProjectTaskState,
            [
                projectId,
                collaboratorId,
                task.taskId,
                task.state
            ]
        );
        return record;
    }
    static async deleteTask({
        projectId,
        payload: taskId,
        collaboratorId
    }: WSProjectTaskToBeDeletedForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProjectTask,
            [
                projectId,
                collaboratorId,
                taskId
            ]
        );
        return record;
    }

    public static async commentInTask({
        projectId,
        payload: comment,
        collaboratorId
    }: WSProjectTaskCommentForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CommentInProjectTask,
            [
                projectId,
                collaboratorId,
                comment.taskId,
                comment.content
            ]
        );
        return record;
    }
}