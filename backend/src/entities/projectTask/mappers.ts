import { bufferToBoolean } from "../../db/helpers";
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
    checked: bufferToBoolean(record["subtask_checked"])
});
const projectTaskCommentMapper = (record: any): ProjectCommentTask => ({
    id: record["id_task_comment"],
    content: record["task_comment_content"],
    datetime: record["task_comment_datetime"].getTime(),
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
        const subtaskId: number | null = record["id_subtask"];
        const taskCommentId: number | null = record["id_task_comment"];
        // Si existe la tarea, se agregan la subtarea y el comentario
        if (taskIdx >= 0) {
            const currentTask: ProjectTask = taskBoardByState[taskIdx];
            // Verificando si hay subtarea en la fila actual para agregarla a las subtareas de la tarea
            if (subtaskId && !currentTask.subtasks.some(({ id }) => id === subtaskId)) 
                currentTask.subtasks = [
                    ...currentTask.subtasks,
                    projectSubtasksMapper(record)
                ];
            // Verificando si hay comentario en la fila actual para agregarla a los comentarios de la tarea
            if (taskCommentId && !currentTask.comments.some(({ id }) => id === taskCommentId))
                currentTask.comments = [
                    ...currentTask.comments,
                    projectTaskCommentMapper(record)
                ];
            return;
        }
        // Sino existe la tarea, se agrega la nueva y se agregan la primera subtarea y el primer comentario
        const reponsibleId: number | null = record["id_responsible"];
        const deadline: Date | null = record["task_deadline"];
        taskBoard[projectTaskBoardState] = [
            ...taskBoardByState,
            {
                id: taskId,
                name: record["task_name"],
                description: record["task_description"] || "",
                priorityId: record["id_task_priority"],
                deadline: deadline ? deadline.getTime() : -1,
                responsible: reponsibleId ? {
                    id: reponsibleId,
                    name: record["responsible_name"],
                    surname: record["responsible_surname"],
                    urlPhoto: record["responsible_url_photo"]
                } : null,
                subtasks: subtaskId ? [projectSubtasksMapper(record)] : [],
                comments: taskCommentId ? [projectTaskCommentMapper(record)] : []
            }
        ];
    });
    return taskBoard;
};