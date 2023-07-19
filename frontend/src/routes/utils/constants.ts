import { ViewModule } from "src/config/roles";
import { AbsolutePaths } from "src/config/absolutePaths";
import ProjectView from "src/views/ProjectView/ProjectView";
import ChatView from "src/views/ChatView/ChatView";
import { ViewModulesRouteByViewModule } from "../types";
import SettingsView from "src/views/SettingsView";

export const MODULE_VIEWS: ViewModulesRouteByViewModule = {
    [ViewModule.Projects]: {
        View: ProjectView,
        path: "proyectos/*"
    },
    [ViewModule.Chat]: {
        View: ChatView,
        path: "chats"
    },
    [ViewModule.Settings]: {
        View: SettingsView,
        path: AbsolutePaths.Settings
    },
};
