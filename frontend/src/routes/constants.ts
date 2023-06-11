import ProjectManagerView from "src/views/ProjectManager/ProjectManagerView";
import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";
import { AbsolutePaths } from "src/config/absolutePaths";
import OnDevelopment from "src/dev-components/OnDevelopment";
import ProjectView from "src/views/ProjectView/ProjectView";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.Projects]: {
        View: ProjectView,
        path: "proyectos/*"
    },
    [ViewModule.Settings]: {
        View: OnDevelopment,
        path: AbsolutePaths.Settings
    },
};
