import ProjectManager from "src/views/ProjectManager/ProjectManager";
import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";
import ProjectDetailsView from "src/views/ProjectDetails/ProjectDetailsView";
import { AbsolutePaths } from "src/config/absolutePaths";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.ProjectManager]: {
        View: ProjectManager,
        path: AbsolutePaths.PROJECT_MANAGER,
    },
    [ViewModule.ProjectDetails]: {
        View: ProjectDetailsView,
        path: AbsolutePaths.PROJECT_DETAILS,
    },
    // [ViewModule.AffiliatedCompanies]: {
    //     View: CompanyManagementView,
    //     path: "empresas-afiliadas"
    // },
};
