export type Role = {
    id: string, name: string
};
export type Credentials = {
    username: string,
    password?: string,
}
export type User = {
    id: number,
    name: string,
    surname: string,
    username: string,
    role: Role,
    urlPhoto: string | null
};
export type AuthData = {
    user: User;
    token: string;
};