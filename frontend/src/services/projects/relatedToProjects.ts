import { APIHandler } from "src/config/api";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import {
    GroupedProjectListForGeneralAdmin,
    ProjectForm,
} from "src/entities/project/types";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { getUserId } from "src/storage/user.local";

export const requestGetProjectsForGeneralAdmin: APIRequestFunction<
    GroupedProjectListForGeneralAdmin,
    string
> = async (projectName: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.GetProjectListByGeneralAdmin,
        [projectName]
    );
    const data: ResponseBody<GroupedProjectListForGeneralAdmin> =
        await APIHandler.api.get(path);
    return data;
};
export const requestCreateProject: APIRequestFunction<
    null,
    ProjectForm | null
> = async (project: ProjectForm | null) => {
    const data: ResponseBody<null> = await APIHandler.api.post(
        ApiPathEndpoints.CreateProject,
        { userId: getUserId(), project }
    );
    return data;
};
export const requestUpdateProject: APIRequestFunction<
    null,
    ProjectForm | null
> = async (project: ProjectForm | null) => {
    const data: ResponseBody<null> = await APIHandler.api.put(
        ApiPathEndpoints.UpdateProject,
        { project }
    );
    return data;
};
