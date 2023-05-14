import { ApiPathEndpointGroups } from "./apiPaths";
import login from "./authentication/login";
import { fatalErrorEndpointHandler } from "./helpers";
import { Endpoint } from "./types";
import { Router } from "express";

const router = Router();
const routes: Endpoint[] = [
    {
        path: ApiPathEndpointGroups.Authentication, 
        routes: login 
    }
];
router.use(fatalErrorEndpointHandler);
routes.forEach(({ path, routes }) => {
    router.use(path, routes);
});

export default router;