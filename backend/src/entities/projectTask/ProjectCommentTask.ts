import CollaboratorUserBase from "../collaborator/CollaboratorUserBase";

export type ProjectTaskCollaboratorUser = Omit<CollaboratorUserBase, "email">;
export default class ProjectCommentTask {
    readonly id: number;
    readonly content: string;
    readonly datetime: number;
    readonly collaborator: ProjectTaskCollaboratorUser;
    constructor(record: any) {
        this.id = record["id_task_comment"];
        this.content = record["task_comment_content"];
        this.datetime = record["task_comment_datetime"].getTime();
        this.collaborator = {
            id: record["id_task_comment_collaborator"],
            name: record["task_comment_collaborator_name"],
            surname: record["task_comment_collaborator_surname"],
            urlPhoto: record["task_comment_collaborator_url_photo"]
        };
    }
}