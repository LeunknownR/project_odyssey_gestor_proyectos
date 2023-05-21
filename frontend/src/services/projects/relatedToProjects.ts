import { APIHandler } from "src/config/api";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { CreateProjectRequestBody } from "./types";
import { GroupedProjectListForGeneralAdmin } from "src/entities/project/types";

export const requestGetProjectsForGeneralAdmin: APIRequestFunction<
    GroupedProjectListForGeneralAdmin,
    string
> = async (projectName: string) => {
    const data: ResponseBody<GroupedProjectListForGeneralAdmin> = await APIHandler.api.get(
        ApiPathEndpoints.GetProjectListByGeneralAdmin,
        {
            params: {
                projectName
            }
        }
    );
    console.log(data)
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