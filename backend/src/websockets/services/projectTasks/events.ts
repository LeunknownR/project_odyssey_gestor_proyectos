namespace WSProjectTaskServiceEvents {
    export enum Server {
        DispatchTaskBoard = "server:dispatch-task-board",
    }
    export enum Collaborator {
        CreateTask = "collaborator:create-task",
        UpdateTask = "collaborator:update-task",
        DeleteTask = "collaborator:delete-task",
        CommentInTask = "collaborator:comment-in-task",
        ChangeTaskState = "collaborator:change-task-state",
    }
}

export default WSProjectTaskServiceEvents;