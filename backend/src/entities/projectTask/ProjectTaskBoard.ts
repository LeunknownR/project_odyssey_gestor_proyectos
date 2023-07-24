import ProjectCommentTask from "./ProjectCommentTask";
import ProjectSubtask from "./ProjectSubtask";
import ProjectTask from "./ProjectTask";
import { ProjectTaskState } from "./entities";

const projectTaskBoardStateByTaskState: Record<ProjectTaskState, string> = {
    [ProjectTaskState.Pending]: "pending",
    [ProjectTaskState.OnProgress]: "onProgress",
    [ProjectTaskState.Finalized]: "finalized",
};
export default class ProjectTaskBoard {
    readonly pending: ProjectTask[];
    readonly onProgress: ProjectTask[];
    readonly finalized: ProjectTask[];
    [projectTaskState: string]: ProjectTask[];
    constructor(resultset: any[]) {
        this.pending = [];
        this.onProgress = [];
        this.finalized = [];
        resultset.forEach(record => {
            const taskState: ProjectTaskState = record["task_state"];
            // Obteniendo el campo del tablero de tareas a través del taskState
            const projectTaskBoardState: string = projectTaskBoardStateByTaskState[taskState];
            const taskId: number = record["id_task"];
            // Obteniendo la lista de tareas del campo del tablero
            const taskBoardByState: ProjectTask[] = this[projectTaskBoardState];
            // Obtiendo idx de la tarea actual
            const taskIdx: number = taskBoardByState.findIndex(({ id }) => id === taskId);
            const subtaskId: number | null = record["id_subtask"];
            const taskCommentId: number | null = record["id_task_comment"];
            // Si existe la tarea, se agregan la subtarea y el comentario
            if (taskIdx >= 0) {
                const currentTask: ProjectTask = taskBoardByState[taskIdx];
                // Verificando si hay subtarea en la fila actual para agregarla a las subtareas de la tarea
                if (subtaskId && !currentTask.existsSubtask(subtaskId)) 
                    currentTask.addSubtask(new ProjectSubtask(record));
                // Verificando si hay comentario en la fila actual para agregarla a los comentarios de la tarea
                if (taskCommentId && !currentTask.existsComment(taskCommentId))
                    currentTask.addComment(new ProjectCommentTask(record));
                return;
            }
            const newProjectTask: ProjectTask = new ProjectTask(record);
            this[projectTaskBoardState] = [
                ...taskBoardByState,
                newProjectTask
            ];
            if (subtaskId)
                newProjectTask.addSubtask(new ProjectSubtask(record));
            if (taskCommentId)
                newProjectTask.addComment(new ProjectCommentTask(record));
        });
    }
}