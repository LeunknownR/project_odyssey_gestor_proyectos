import { bufferToBoolean } from "../../db/helpers";
import ProjectCommentTask from "./ProjectCommentTask";
import ProjectSubtask from "./ProjectSubtask";
import { ProjectTaskResponsible } from "./entities";

export default class ProjectTask {
    //#region Attributes
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly responsible: ProjectTaskResponsible | null;
    readonly priorityId: number | null;
    readonly deadline: number;
    readonly subtasks: ProjectSubtask[];
    readonly comments: ProjectCommentTask[];
    //#endregion
    constructor(record: any) {
        const reponsibleId: number | null = record["id_responsible"];
        const deadline: Date | null = record["task_deadline"];
        this.id = record["id_task"];
        this.name = record["task_name"];
        this.description = record["task_description"] || "";
        this.priorityId = record["id_task_priority"];
        this.deadline = deadline ? deadline.getTime() : -1;
        this.responsible = reponsibleId ? {
            id: reponsibleId,
            name: record["responsible_name"],
            surname: record["responsible_surname"],
            urlPhoto: record["responsible_url_photo"],
            active: bufferToBoolean(record["responsible_active"])
        } : null;
        this.subtasks = [];
        this.comments = [];
    }
    //#region Methods
    addSubtask(subtask: ProjectSubtask): void {
        this.subtasks.push(subtask);
    }
    addComment(comment: ProjectCommentTask): void {
        this.comments.push(comment);
    }
    existsSubtask(subtaskId: number) {
        return this.subtasks.some(({ id }) => id === subtaskId);
    }
    existsComment(commentId: number) {
        return this.comments.some(({ id }) => id === commentId);
    }
    //#endregion
}