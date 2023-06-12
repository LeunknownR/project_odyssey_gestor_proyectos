import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { 
    WSProjectTaskToBeChangedStateForm,
    WSProjectTaskToBeDeletedForm,
    WSNewProjectTaskForm, 
    WSProjectTaskCommentForm, 
    WSProjectTaskMainInformationForm, 
    WSProjectSubtaskToBeDeletedForm,
    WSSubtaskToBeUpdatedForm,
    WSSubtaskToBeSwitchedCheckStatusForm
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
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateProjectTask,
            [
                projectId, task.name,
                task.state, collaboratorId
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
    public static async updatesubtask({
        projectId, 
        payload: subtask, 
        collaboratorId
    }: WSSubtaskToBeUpdatedForm): Promise<any> {
        return { message: 'SUCCESS' }
        const [[record]] = await DBConnection.query(
            StoredProcedures.UpdateProjectSubtask,
            [
                projectId, 
                collaboratorId,
                subtask.subtaskId,
                subtask.name, 
            ]
        );
        return record;
    }
    static async switchCheckStatusSubtask({
        projectId,
        payload: subtask,
        collaboratorId
    }: WSSubtaskToBeSwitchedCheckStatusForm): Promise<any> {
        return { message: 'SUCCESS' }
        const [[record]] = await DBConnection.query(
            StoredProcedures.SwitchCheckStatusSubtask,
            [
                projectId,
                subtask.subtaskId,
                subtask.checked,
                collaboratorId
            ]
        );
        return record;
    }
    static async deleteSubtask({
        projectId,
        payload: subtaskId,
        collaboratorId
    }: WSProjectSubtaskToBeDeletedForm): Promise<any> {
        return { message: 'SUCCESS' }
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProjectSubtask,
            [
                projectId,
                subtaskId,
                collaboratorId
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
                task.taskId,
                task.state,
                collaboratorId
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
                taskId,
                collaboratorId
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
                comment.taskId,
                comment.content,
                collaboratorId
            ]
        );
        return record;
    }
}