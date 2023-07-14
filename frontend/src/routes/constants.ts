import { ViewModulesRouteByViewModule } from "./types";
import { ViewModule } from "src/config/roles";
import { AbsolutePaths } from "src/config/absolutePaths";
import OnDevelopment from "src/dev-components/OnDevelopment";
import ProjectView from "src/views/ProjectView/ProjectView";
import ChatView from "src/views/ProjectView/components/ChatRoomsView/ChatView";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.Projects]: {
        View: ProjectView,
        path: "proyectos/*"
    },
    [ViewModule.Chat]: {
        View: ChatView,
        path: "salas-chat/*"
    },
    [ViewModule.Settings]: {
        View: OnDevelopment,
        path: AbsolutePaths.Settings
    },
};
