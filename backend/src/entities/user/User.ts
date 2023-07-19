import { Role } from "./types";

export class User {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly username: string;
    readonly email: string;
    readonly urlPhoto: string | null;
    constructor(record: any) {
        this.id = record["id_user"];
        this.name = record["user_name"];
        this.surname = record["user_surname"];
        this.username = record["username"];
        this.email = record["email"];
        this.urlPhoto = record["url_photo"];
    }
}
export class SessionUser extends User {
    readonly role: Role;
    constructor(record: any) {
        super(record);
        this.role = {
            id: record["id_role"],
            name: record["role_name"]
        };
    }
}