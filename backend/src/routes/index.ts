import { ApiPathEndpointGroups } from "./apiPaths";
import login from "./authentication/login";
import generalAdminProjects from "./generalAdmin/projects/projects";
import collaboratorProjects from "./collaborator/projects/projects";
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
    }
];
routes.forEach(({ path, routes }) => {
    router.use(path, routes);
});

export default router;