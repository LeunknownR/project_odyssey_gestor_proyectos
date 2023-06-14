import { SessionStorage } from "./helpers";

export const currentProjectSessionIdStorage = new SessionStorage<number>("currentProjectId");
export const setProjectId = (projectId: number) => {
    return currentProjectSessionIdStorage.set(projectId)
}
export const getProjectId = () => {
    return currentProjectSessionIdStorage.get();
}