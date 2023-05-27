import { projectCollaboratorMapper } from "../collaborator/mappers";
import { CollaboratorUser } from "../collaborator/types";
import { 
    Project, 
    GroupedProjectList,
    ProjectDetails 
} from "./types";

const projectLeaderMapper = (record: any): CollaboratorUser => ({
    id: record["id_user"],
    name: record["user_name"],
    surname: record["user_surname"],
    email: record["email"],
    urlPhoto: record["url_photo"]
});
const projectByGeneralAdminMapper = (record: any): Project => ({
    id: record["id_project"],
    name: record["project_name"],
    description: record["description"],
    startDate: record["start_date"].getTime(),
    endDate: record["end_date"].getTime(),
    state: record["state"],
    leader: projectLeaderMapper(record)
});
export const projectListByGeneralAdminMapper = (resultset: any[]): GroupedProjectList => {
    const projectList: Project[] = resultset.map(projectByGeneralAdminMapper);
    return {
        recents: projectList.slice(0, 3),
        all: projectList.slice(3)
    };
}
const projectByCollaboratorMapper = (record: any): Project => ({
    id: record["id_project"],
    name: record["project_name"],
    description: record["project_description"],
    startDate: record["project_start_date"].getTime(),
    endDate: record["project_end_date"].getTime(),
    state: record["project_state"],
});
export const projectListByCollaboratorMapper = (resultset: any[]): GroupedProjectList => {
    const projectByCollaborator: Project[] = resultset.map(projectByCollaboratorMapper);
    return {
        recents: projectByCollaborator.slice(0, 3),
        all: projectByCollaborator.slice(3)
    };
}
export const projectDetailsMapper = (resultset: any[]): ProjectDetails => {
    const [header] = resultset;
    return {
        id: header["id_project"],
        name: header["project_name"],
        description: header["project_description"],
        period: header["period_project"],// 10-05-2023 / 10-10-2023
        endDate: header["project_end_date"].getTime(),
        collaborators: resultset.map(projectCollaboratorMapper)
    };
};