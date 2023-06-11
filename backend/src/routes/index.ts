import { ApiPathEndpointGroups } from "./apiPaths";
import login from "./authentication/login";
import generalAdminProjects from "./generalAdmin/projects/projects.router";
import collaboratorProjects from "./collaborator/projects/projects.router";
import collaboratorProjectTasks from "./collaborator/projectTasks/projectTasks.router";
import collaboratorProjectPanel from "./collaborator/projectPanel/projectPanel.router";
import { Endpoint } from "./types";
import { Router } from "express";

const router = Router();
const routes: Endpoint[] = [
    {
        path: ApiPathEndpointGroups.Authentication, 
        routes: login 
    },
    {
        path: ApiPathEndpointGroups.GeneralAdmin,
        routes: generalAdminProjects 
    },
    {
        path: ApiPathEndpointGroups.Collaborator,
        routes: collaboratorProjects 
    },
    {
        path: ApiPathEndpointGroups.Collaborator,
        routes: collaboratorProjectPanel
    },
    {
        path: ApiPathEndpointGroups.Collaborator,
        routes: collaboratorProjectTasks
    }
];
routes.forEach(({ path, routes }) => {
    router.use(path, routes);
});

export default router;