export enum AbsolutePaths {
    Login = "/login",
    Projects = "/proyectos",
    Chats = "/chats",
    Settings = "/settings"
}
export const getProjectDetails = (projectId: number): string => {
    return `${AbsolutePaths.Projects}/${projectId}/detalles`;
}
export const getProjectTasks = (projectId: number): string => {
    return `${AbsolutePaths.Projects}/${projectId}/tareas`;
}