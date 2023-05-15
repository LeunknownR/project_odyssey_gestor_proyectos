import { projectCollaboratorMapper } from "../collaborator/mappers";
import { ProjectLeader, ProjectRole } from "../collaborator/types";
import { Project, GroupedProjectListForGeneralAdmin, ProjectByCollaborator, GroupedProjectListForCollaborator, ProjectDetails } from "./types";

const projectLeaderMapper = (record: any): ProjectLeader => ({
    name: record["name"],
    surname: record["surname"],
    email: record["email"],
    urlPhoto: record["url_photo"]
});
const projectByGeneralAdminMapper = (record: any): Project => ({
    id: record["id"],
    name: record["name"],
    description: record["description"],
    startDate: record["start_date"],
    endDate: record["end_date"],
    state: record["state"],
    leader: projectLeaderMapper(record)
});
export const projectListByGeneralAdminMapper = (resultset: any[]): GroupedProjectListForGeneralAdmin => {
    const projectList: Project[] = resultset.map(projectByGeneralAdminMapper);
    return {
        recents: projectList.slice(0, 3),
        all: projectList.slice(3)
    };
}
const projectByCollaboratorMapper = (record: any): ProjectByCollaborator => ({
    id: record["id"],
    name: record["name"],
    description: record["description"],
    startDate: record["start_date"],
    endDate: record["end_date"],
    state: record["state"],
});
export const projectListByCollaboratorMapper = (resultset: any[]): GroupedProjectListForCollaborator => {
    const projectByCollaborator: ProjectByCollaborator[] = resultset.map(projectByCollaboratorMapper);
    return {
        recents: projectByCollaborator.slice(0, 3),
        all: projectByCollaborator.slice(3)
    };
}
export const projectDetailsMapper = (resultset: any[]): ProjectDetails => {
    const [header] = resultset;
    return {
        name: header["project_name"],
        description: header["description"],
        endDate: header["end_date"],
        period: header["period_project"],// 10-05-2023 / 10-10-2023
        collaborators: resultset.map(projectCollaboratorMapper)
    };
};