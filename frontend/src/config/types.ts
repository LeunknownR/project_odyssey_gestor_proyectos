import { PanelTabProps } from "src/views/ProjectSpecificManagement/types";
import { ViewModule } from "./roles";

export type ModuleViewByUserRole = {
    [roleId: string]: ViewModule[];
};
export type SubmoduleView = {
    key: string;
    path: string;
    View: ({ projectId }: PanelTabProps) => JSX.Element | null;
};
