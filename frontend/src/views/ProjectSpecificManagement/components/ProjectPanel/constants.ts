import { SubmoduleView } from "src/config/types";
import TaskBoard from "../TaskManager/TaskBoard";
import Timeline from "../Timeline/Timeline";
import ChatRooms from "../ChatRooms/ChatRooms";

export const SUBMODULES_VIEWS: SubmoduleView[] = [
    {
        key: "TASK_MANAGER",
        View: TaskBoard,
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
