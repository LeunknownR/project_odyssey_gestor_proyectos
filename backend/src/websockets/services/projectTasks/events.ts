namespace WSProjectTaskServiceEvents {
    export enum Server {
        DispatchTaskBoard = "server:dispatch-task-board",
    }
    export enum Collaborator {
        CreateTask = "collaborator:create-task",
        UpdateTask = "collaborator:update-task",
        ChangeTaskState = "collaborator:change-task-state",
        DeleteTask = "collaborator:delete-task",
        CommentInTask = "collaborator:comment-in-task"
    }
}

export default WSProjectTaskServiceEvents;