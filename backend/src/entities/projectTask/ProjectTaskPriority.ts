export class ProjectTaskPriority {
    readonly id: number;
	readonly urlPhoto: string;
    constructor(record: any) {
        this.id = record["id_task_priority"];
        this.urlPhoto = record["url_image"];
    }
}