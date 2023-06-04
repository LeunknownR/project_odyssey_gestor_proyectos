export enum WSProjectTaskServiceServerEvents {
    ListTasks = "server:list-tasks"
}
export enum WSProjectTaskServiceCollaboratorEvents {
    CreateTask = "collaborator:create-task",
    UpdateTask = "collaborator:update-task",
    DeleteTask = "collaborator:delete-task",
    CommentInTask = "collaborator:comment-in-task"
}