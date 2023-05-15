import { Router } from "express"

export type Endpoint = {
    path: string,
    routes: Router
};