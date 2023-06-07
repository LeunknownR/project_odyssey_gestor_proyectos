import { ViewModule } from "./roles";

export type ModuleViewByUserRole = {
    [roleId: string]: ViewModule[];
};
export type SubmoduleView = {
    key: string,
    path: string,
    View: () => JSX.Element
};