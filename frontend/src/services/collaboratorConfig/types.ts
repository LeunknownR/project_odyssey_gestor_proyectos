import { User } from "src/entities/user/types";

export type GetCollaboratorsRequestBody = {
    searchedCollaborator: string;
    page: number;
};
export type GetCollaboratorsResponseRequest = {
    list: User[];
    count: number;
};
export type CheckCredentialsRequestBody = {
    username: string;
    password: string;
}