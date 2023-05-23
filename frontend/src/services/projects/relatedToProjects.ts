import { APIHandler } from "src/config/api";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { CreateProjectRequestBody } from "./types";
import { GroupedProjectListForGeneralAdmin } from "src/entities/project/types";
import { getEndpointWithPathVariables } from "../utils/helpers";

export const requestGetProjectsForGeneralAdmin: APIRequestFunction<
    GroupedProjectListForGeneralAdmin,
    string
> = async (projectName: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.GetProjectListByGeneralAdmin, 
        [projectName]);
    const data: ResponseBody<GroupedProjectListForGeneralAdmin> = await APIHandler.api.get(
        path
    );
    return data;
};
export const requestCreateProject: APIRequestFunction<
    null,
    CreateProjectRequestBody
> = async (formProject: CreateProjectRequestBody) => {
    const data: ResponseBody<null> = await APIHandler.api.post(
        ApiPathEndpoints.CreateProject,
        formProject
    );
    return data;
};