import { projectCollaboratorMapper } from "../collaborator/mappers";
import { CollaboratorUser } from "../collaborator/types";
import { 
    Project, 
    GroupedProjectList,
    ProjectDetails 
} from "./types";

const projectLeaderMapper = (record: any): CollaboratorUser => ({
    id: record["id_collaborator"],
    name: record["collaborator_name"],
    surname: record["collaborator_surname"],
    email: record["collaborator_email"],
    urlPhoto: record["collaborator_url_photo"]
});
const projectByGeneralAdminMapper = (record: any): Project => ({
    id: record["id_project"],
    name: record["project_name"],
    description: record["project_description"],
    startDate: record["project_start_date"].getTime(),
    endDate: record["project_end_date"].getTime(),
    state: record["project_state"],
    projectMemberCount: record["project_member_count"],
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
    projectMemberCount: record["project_member_count"]
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
        period: header["period_project"],
        endDate: header["project_end_date"].getTime(),
        collaborators: resultset.map(projectCollaboratorMapper)
    };
};