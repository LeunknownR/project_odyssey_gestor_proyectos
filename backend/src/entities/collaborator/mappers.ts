import { Collaborator } from "./types";

export const collaboratorMapper = (record: any): Collaborator => ({
    id: record["id"],
    name: record["name"],
    surname: record["surname"], 
    urlPhoto: record["url_photo"]
});