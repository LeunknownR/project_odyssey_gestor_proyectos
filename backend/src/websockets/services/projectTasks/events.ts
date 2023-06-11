namespace WSProjectTaskServiceEvents {
    export enum Server {
        DispatchTaskBoard = "server:dispatch-task-board",
    }
    export enum Collaborator {
        CreateTask = "collaborator:create-task",
        UpdateTaskMainInfo = "collaborator:update-task-main-info",
        CreateSubtask = "collaborator:create-subtask",
        UpdateSubtask = "collaborator:update-subtask",
        DeleteSubtask = "collaborator:delete-subtask",
        SwitchCheckStatusSubtask = "collaborator:switch-check-status-subtask",
        ChangeTaskState = "collaborator:change-task-state",
        DeleteTask = "collaborator:delete-task",
        CommentInTask = "collaborator:comment-in-task"
    }
}

export default WSProjectTaskServiceEvents;