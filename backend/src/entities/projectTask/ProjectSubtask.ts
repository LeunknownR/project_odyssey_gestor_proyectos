import { bufferToBoolean } from "../../db/helpers";

export default class ProjectSubtask {
    readonly id: number;
    readonly name: string;
    readonly checked: boolean;
    constructor(record: any) {
        this.id = record["id_subtask"],
        this.name = record["subtask_name"],
        this.checked = bufferToBoolean(record["subtask_checked"])
    }
}