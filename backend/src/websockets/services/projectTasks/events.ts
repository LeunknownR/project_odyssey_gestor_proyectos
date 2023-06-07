export enum WSProjectTaskServiceServerEvents {
    DispatchTaskBoard = "server:dispatch-task-board"
}
export enum WSProjectTaskServiceCollaboratorEvents {
    CreateTask = "collaborator:create-task",
    UpdateTask = "collaborator:update-task",
    DeleteTask = "collaborator:delete-task",
    CommentInTask = "collaborator:comment-in-task",
    ChangeTaskState = "collaborator:change-task-state"
}