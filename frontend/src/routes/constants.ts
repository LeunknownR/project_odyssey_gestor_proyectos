import ProjectManager from "src/views/ProjectManager/ProjectManager";
import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.ProjectManager]: {
        View: ProjectManager,
        path: "proyectos",
    },
    // [ViewModule.AffiliatedCompanies]: {
    //     View: CompanyManagementView,
    //     path: "empresas-afiliadas"
    // },
};
