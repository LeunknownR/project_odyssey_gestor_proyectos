import { SubmoduleView } from "src/config/types";
import TaskBoardView from "../components/TaskBoardView/TaskBoardView";
import Timeline from "../components/TimelineView/TimelineView";
import ChatRooms from "../components/ChatRoomsView/ChatRoomsView";
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
    {
        key: "CHAT_ROOMS",
        View: ChatRooms,
        path: "salas-chat",
    },
];
export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Detalles",
        to: "detalles",
        icon: "fa6-solid:diagram-project"
    }
];