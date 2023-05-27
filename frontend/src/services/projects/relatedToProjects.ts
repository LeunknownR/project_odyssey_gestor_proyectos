import { APIHandler } from "src/config/api";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import {
    GroupedProjectList,
    ProjectDetails,
    ProjectForm,
} from "src/entities/project/types";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { getUserId } from "src/storage/user.local";
import {
    CreateProjectRequestBody,
    DeleteProjectRequestBody,
    UpdateProjectEndDateRequestBody,
} from "./types";

export const requestGetProjectsForGeneralAdmin: APIRequestFunction<
    GroupedProjectList,
    string
> = async (projectName: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.GetProjectListByGeneralAdmin,
        [projectName]
    );
    const data: ResponseBody<GroupedProjectList> = await APIHandler.api.get(
        path
    );
    return data;
};
export const requestGetProjectsForCollaborator: APIRequestFunction<
    GroupedProjectList,
    string
> = async (projectName: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.GetProjectListForCollaborator,
        [getUserId(), projectName]
    );
    const data: ResponseBody<GroupedProjectList> = await APIHandler.api.get(
        path
    );
    return data;
};
export const requestCreateProject: APIRequestFunction<
    null,
    ProjectForm
> = async (project: ProjectForm) => {
    const body: CreateProjectRequestBody = {
        userId: getUserId(),
        project,
    };
    const data: ResponseBody = await APIHandler.api.post(
        ApiPathEndpoints.CreateProject,
        body
    );
    return data;
};
export const requestUpdateProject: APIRequestFunction<
    null,
    ProjectForm
> = async (project: ProjectForm) => {
    const data: ResponseBody = await APIHandler.api.put(
        ApiPathEndpoints.UpdateProject,
        project
    );
    return data;
};
export const requestDeleteProject: APIRequestFunction<null, number> = async (
    projectId: number
) => {
    const body: DeleteProjectRequestBody = {
        userId: getUserId(),
        projectId,
    };
    const data: ResponseBody = await APIHandler.api.delete(
        ApiPathEndpoints.DeleteProject,
        { data: body }
    );
    return data;
};
export const requestGetProjectDetails: APIRequestFunction<
    ProjectDetails,
    number
> = async (projectId: number) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.GetProjectDetails,
        [projectId]
    );
    const data: ResponseBody<ProjectDetails> = await APIHandler.api.get(path);
    return data;
};
export const requestUpdateProjectEndDate: APIRequestFunction<
    null,
    UpdateProjectEndDateRequestBody
> = async (project: UpdateProjectEndDateRequestBody) => {
    const data: ResponseBody = await APIHandler.api.patch(
        ApiPathEndpoints.UpdateEndDateProject,
        project
    );
    return data;
};
export const requestDeleteMember: APIRequestFunction<
    null,
    number
> = async (projectHasCollaboratorId: number) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.DeleteProjectMember,
        [getUserId(), projectHasCollaboratorId]
    );
    const data: ResponseBody = await APIHandler.api.delete(path);
    return data;
};
