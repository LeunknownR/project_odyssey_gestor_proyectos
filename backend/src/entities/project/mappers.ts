import { 
    Project, 
    GroupedProjectList,
    ProjectPanelDetails, 
    ProjectDetails
} from "./entities";
import ProjectCollaborator from "./ProjectCollaborator";
import ProjectLeader from "./ProjectLeader";

const projectByGeneralAdminMapper = (record: any): Project => ({
    id: record["id_project"],
    name: record["project_name"],
    description: record["project_description"],
    startDate: record["project_start_date"].getTime(),
    endDate: record["project_end_date"].getTime(),
    state: record["project_state"],
    projectMemberCount: record["project_member_count"],
    leader: new ProjectLeader(record)
});
export const projectListByGeneralAdminMapper = (resultset: any[]): GroupedProjectList => {
    const projectList: Project[] = resultset.map(projectByGeneralAdminMapper);
    return {
        recents: projectList.slice(0, 3),
        all: projectList
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
    const projectList: Project[] = resultset.map(projectByCollaboratorMapper);
    return {
        recents: projectList.slice(0, 3),
        all: projectList
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
        state: header["project_state"],
        collaborators: resultset.map(record => new ProjectCollaborator(record))
    };
};
export const projetPanelDetailsMapper = (resultset: any): ProjectPanelDetails => {
    const [header] = resultset;
    return {
        id: header["id_project"],
        name: header["project_name"],
        state: header["project_state"],
        projectRoleId: header["id_project_role"],
    };
};
