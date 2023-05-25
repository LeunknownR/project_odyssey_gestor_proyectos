import ProjectManager from "src/views/ProjectManager/ProjectManager";
import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";
import ProjectDetailsView from "src/views/ProjectDetails/ProjectDetailsView";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.ProjectManager]: {
        View: ProjectManager,
        path: "proyectos",
    },
    [ViewModule.ProjectDetails]: {
        View: ProjectDetailsView,
        path: "detalles",
    },
    // [ViewModule.AffiliatedCompanies]: {
    //     View: CompanyManagementView,
    //     path: "empresas-afiliadas"
    // },
};
