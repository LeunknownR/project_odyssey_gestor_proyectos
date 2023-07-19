import { AbsolutePaths } from "src/config/absolutePaths";
import { MenuOption } from "src/views/components/MenuOptions/types";

export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Tareas",
        to: "../tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Chats",
        to: AbsolutePaths.Chats,
        icon: "grommet-icons:chat",
    },
];