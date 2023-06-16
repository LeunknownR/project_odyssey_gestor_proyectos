import { SubmoduleView } from "src/config/types";
import TaskBoardView from "./components/TaskBoardView/TaskBoardView";
import Timeline from "./components/TimelineView/TimelineView";
import ChatRooms from "./components/ChatRoomsView/ChatRoomsView";

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
