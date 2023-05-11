import { Project, ProjectLeader, GroupedProjectList } from "./types";

const projectLeaderMapper = (record: any): ProjectLeader => ({
    name: record["name"],
    surname: record["surname"], 
    email: record["emil"],
    projectRole: record["project_role"],
    urlPhoto: record["url_photo"]
});
const projectMapper = (record: any): Project => ({
    id: record["id"],
    name: record["name"],
    description: record["description"],
    startDate: record["start_date"],
    endDate: record["end_date"],
    state: record["state"],
    leader: projectLeaderMapper(record)
});
export const projectListMapper = (resultset: any[]): GroupedProjectList => {
    const projectList: Project[] = resultset.map(projectMapper);
    return {
        recents: projectList.slice(0, 3),
        all: projectList.slice(3)
    };
}