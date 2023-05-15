import { ApiPathEndpointGroups } from "./apiPaths";
import login from "./authentication/login";
import { Endpoint } from "./types";
import { Router } from "express";

const router = Router();
const routes: Endpoint[] = [
    {
        path: ApiPathEndpointGroups.Authentication, 
        routes: login 
    }
];
routes.forEach(({ path, routes }) => {
    router.use(path, routes);
});

export default router;