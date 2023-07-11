import { AbsolutePaths } from "src/config/absolutePaths";
import { MenuOption } from "src/views/components/MenuOptions/types";

export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Tareas",
        to: "../tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Salas de chat",
        to: AbsolutePaths.Chat,
        icon: "grommet-icons:chat",
    },
];