import { ProjectCommentTask, ProjectSubtask, ProjectTask } from "./entities";
import { ProjectTaskBoard, ProjectTaskState } from "./entities";

const projectTaskBoardStateByTaskState: Record<ProjectTaskState, string> = {
    [ProjectTaskState.Pending]: "pending",
    [ProjectTaskState.OnProgress]: "onProgress",
    [ProjectTaskState.Finalized]: "finalized",
};
const projectSubtasksMapper = (record: any): ProjectSubtask => ({
    id: record["id_subtask"],
    name: record["subtask_name"],
    checked: record["subtask_checked"]
});
const projectTaskCommentMapper = (record: any): ProjectCommentTask => ({
    id: record["id_task_comment"],
    content: record["task_comment_content"],
    datetime: record["task_comment_datetime"],
    collaborator: {
        id: record["id_task_comment_collaborator"],
        name: record["task_comment_collaborator_name"],
        surname: record["task_comment_collaborator_surname"],
        urlPhoto: record["task_comment_collaborator_url_photo"]
    }
});
export const projectTaskBoardMapper = (resulset: any[]): ProjectTaskBoard => {
    const taskBoard: ProjectTaskBoard = {
        pending: [],
        onProgress: [],
        finalized: []
    };
    resulset.forEach(record => {
        const taskState: ProjectTaskState = record["task_state"]; 
        // Obteniendo el campo del tablero de tareas a través del taskState
        const projectTaskBoardState: string = projectTaskBoardStateByTaskState[taskState];
        const taskId: number = record["id_task"];
        // Obteniendo la lista de tareas del campo del tablero
        const taskBoardByState: ProjectTask[] = taskBoard[projectTaskBoardState];
        // Obtiendo idx de la tarea actual
        const taskIdx: number = taskBoardByState.findIndex(({ id }) => id === taskId);
        // Si existe la tarea, se agregan la subtarea y el comentario
        if (taskIdx > 0) {
            taskBoardByState[taskIdx].subtasks = [
                ...taskBoardByState[taskIdx].subtasks, 
                projectSubtasksMapper(record)
            ];
            taskBoardByState[taskIdx].comments = [
                ...taskBoardByState[taskIdx].comments,
                projectTaskCommentMapper(record)
            ]
            return;
        }
        // Sino existe la tarea, se agrega la nueva y se agregan la primera subtarea y el primer comentario
        taskBoard[projectTaskBoardState] = [
            ...taskBoardByState,
            {
                id: taskId,
                name: record["task_name"],
                description: record["task_description"],
                checked: record["task_checked"],
                priorityId: record["id_task_priority"],
                deadline: record["task_deadline"],
                responsable: {
                    id: record["id_responsable"],
                    name: record["responsable_name"],
                    surname: record["responsable_surname"],
                    urlPhoto: record["responsable_url_photo"]
                },
                subtasks: [projectSubtasksMapper(record)],
                comments: [projectTaskCommentMapper(record)]
            }
        ];
    });
    return taskBoard;
};