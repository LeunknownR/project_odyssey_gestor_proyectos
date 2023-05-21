import { ViewModule } from "./roles";

export type ModuleViewByUserRole = {
    [roleId: string]: ViewModule[];
};