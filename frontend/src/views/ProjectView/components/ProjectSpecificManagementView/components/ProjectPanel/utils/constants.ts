import TaskBoardView from "../components/TaskBoardView/TaskBoardView";
import { MenuOption } from "src/views/components/MenuOptions/types";
import { ProjectPanelSubmodule } from "../types";
import { AbsolutePaths } from "src/config/absolutePaths";

export const SUBMODULES_VIEWS: ProjectPanelSubmodule[] = [
    {
        key: "TASK_MANAGER",
        View: TaskBoardView,
        path: "tareas",
    },
];
export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Detalles",
        to: "../detalles",
        icon: "fa6-solid:diagram-project"
    }
];
export const RESPONSIVE_MENU_OPTIONS: MenuOption[] = [
    {
        text: "Tareas",
        to: "../tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Chats",
        to: AbsolutePaths.Chats,
        icon: "grommet-icons:chat",
    }
]