import ProjectManager from "src/views/ProjectManager/ProjectManager";
import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";
import ProjectDetailsView from "src/views/ProjectDetails/ProjectDetailsView";
import { AbsolutePaths } from "src/config/absolutePaths";
import OnDevelopment from "src/dev-components/OnDevelopment";
import TaskManager from "src/views/TaskManager/TaskManager";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.ProjectManager]: {
        View: ProjectManager,
        path: AbsolutePaths.ProjectManager,
    },
    [ViewModule.ProjectDetails]: {
        View: ProjectDetailsView,
        path: AbsolutePaths.ProjectDetails,
    },
    [ViewModule.TaskManager]: {
        View: TaskManager,
        path: AbsolutePaths.TaskManager,
    },
    [ViewModule.Settings]: {
        View: OnDevelopment,
        path: AbsolutePaths.Settings
    }
};
