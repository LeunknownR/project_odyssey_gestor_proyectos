import { SubmoduleView } from "src/config/types";
import TaskManager from "./components/TaskManager/TaskManager";
import ChatRooms from "./components/ChatRooms/ChatRooms";
import Timeline from "./components/Timeline/Timeline";

export const SUBMODULES_VIEWS: SubmoduleView[] = [
    {
        key: "TASK_MANAGER",
        View: TaskManager,
        path: "tareas-proyecto",
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
