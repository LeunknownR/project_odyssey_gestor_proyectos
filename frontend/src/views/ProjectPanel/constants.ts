import { SubmoduleView } from "src/config/types";
import TaskBoard from "./components/TaskManager/TaskBoard";
import ChatRooms from "./components/ChatRooms/ChatRooms";
import Timeline from "./components/Timeline/Timeline";

export const SUBMODULES_VIEWS: SubmoduleView[] = [
    {
        key: "TASK_MANAGER",
        View: TaskBoard,
        path: "tablero-proyecto",
    },
    {
        key: "TIMELINE",
        View: Timeline,
        path: "cronograma-proyecto",
    },
    {
        key: "CHAT_ROOMS",
        View: ChatRooms,
        path: "salas-chat-proyecto",
    },
];
