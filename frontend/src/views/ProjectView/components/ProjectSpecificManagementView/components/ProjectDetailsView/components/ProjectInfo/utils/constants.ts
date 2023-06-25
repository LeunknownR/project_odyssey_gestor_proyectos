import { MenuOption } from "src/views/components/MenuOptions/types";

export const MENU_OPTIONS: MenuOption[] = [
    {
        text: "Tareas",
        to: "../tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Cronograma",
        to: "../cronograma",
        icon: "fluent:gantt-chart-16-regular",
    },
    {
        text: "Salas de chat",
        to: "../salas-chat",
        icon: "grommet-icons:chat",
    },
];