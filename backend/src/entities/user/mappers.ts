import { User } from "./types";

export const userFromRecordMapper = (record: any): User => ({
    id: record["id_user"],
    name: record["user_name"],
    surname: record["user_surname"],
    username: record["username"],
    urlPhoto: record["url_photo"],
    role: {
        id: record["id_role"],
        name: record["role_name"]
    }
});