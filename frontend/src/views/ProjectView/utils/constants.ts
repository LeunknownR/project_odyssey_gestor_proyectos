import { SubmoduleView } from "src/config/types";
import ProjectDetailsView from "./components/ProjectDetailsView/ProjectDetailsView";
import ProjectPanel from "./components/ProjectPanel/ProjectPanel";
import ProjectManagerView from "src/views/ProjectManager/ProjectManagerView";
import { AbsolutePaths } from "src/config/absolutePaths";

export const SUBMODULES_VIEWS: SubmoduleView[] = [
    {
        key: "PROJECT_MANAGER",
        View: ProjectManagerView,
        path: "",
    },
    // {
    //     key: "PROJECT_DETAILS",
    //     View: ProjectDetailsView,
    //     path: "detalles",
    // },
    {
        key: "PROJECT_PANEL",
        View: ProjectPanel,
        path: "*",
    },
];
export enum ViewModule {
    Projects = "PROJECT_MANAGER",
    ProjectSpecificManager = "PROJECT_SPECIFIC_MANAGER"
}