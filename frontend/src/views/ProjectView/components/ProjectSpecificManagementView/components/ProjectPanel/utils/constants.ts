import { SubmoduleView } from "src/config/types";
import TaskBoardView from "../components/TaskBoardView/TaskBoardView";
import Timeline from "../components/TimelineView/TimelineView";
import { MenuOption } from "src/views/components/MenuOptions/types";

export const SUBMODULES_VIEWS: SubmoduleView[] = [
    {
        key: "TASK_MANAGER",
        View: TaskBoardView,
        path: "tareas",
    },
    {
        key: "TIMELINE",
        View: Timeline,
        path: "cronograma",
    },
];
export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Detalles",
        to: "detalles",
        icon: "fa6-solid:diagram-project"
    }
];
export const RESPONSIVE_MENU_OPTIONS: MenuOption[] = [
    {
        text: "Tareas",
        to: "tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Cronograma",
        to: "cronograma",
        icon: "fluent:gantt-chart-16-regular",
    },
    {
        text: "Salas de chat",
        to: "salas-chat",
        icon: "grommet-icons:chat",
    },
]