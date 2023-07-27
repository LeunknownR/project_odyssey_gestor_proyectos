import { ApiPathEndpointGroups } from "./apiPaths";
import login from "./authentication/login";
import generalAdminProjects from "./generalAdmin/projects/projects.router";
import initGeneralAdminCollaboratorEndpoints from "./generalAdmin/collaborators/collaborators.router";
import initCollaboratorProjectEndpoints from "./collaborator/projects/projects.router";
import collaboratorProjectTasks from "./collaborator/projectTasks/projectTasks.router";
import collaboratorProjectPanel from "./collaborator/projectPanel/projectPanel.router";
import collaboratorProfile from "./collaborator/profile/profile.router";
import { Endpoint } from "./types";
import { Router } from "express";
import ExternalWSServiceHandler from "../websockets/utils/ExternalWSServiceHandler";

export default function initEndpoints(externalWsServiceHandler: ExternalWSServiceHandler) {
    const router = Router();
    const endpoints: Endpoint[] = [
        {
            path: ApiPathEndpointGroups.Authentication, 
            routers: login 
        },
        {
            path: ApiPathEndpointGroups.GeneralAdmin,
            routers: generalAdminProjects 
        },
        {
            path: ApiPathEndpointGroups.GeneralAdmin,
            routers: initGeneralAdminCollaboratorEndpoints(externalWsServiceHandler)
        },
        {
            path: ApiPathEndpointGroups.Collaborator,
            routers: initCollaboratorProjectEndpoints(externalWsServiceHandler)
        },
        {
            path: ApiPathEndpointGroups.Collaborator,
            routers: collaboratorProjectPanel
        },
        {
            path: ApiPathEndpointGroups.Collaborator,
            routers: collaboratorProjectTasks
        },
        {
            path: ApiPathEndpointGroups.Collaborator,
            routers: collaboratorProfile
        }
    ];
    endpoints.forEach(({ path, routers }) => {
        router.use(path, routers);
    });
    return router;
}