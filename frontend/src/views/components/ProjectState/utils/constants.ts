import { ProjectState } from "src/entities/project/enums";
import { StateProjectVisual } from "../types";

export const PROJECT_STATE: Record<string, StateProjectVisual> = {
    [ProjectState.Finalized]: {
        title: "Finalizado",
        color: "var(--red-0)",
        background: "var(--red-5)"
    },
    [ProjectState.OnProgress]: {
        title: "En curso",
        color: "var(--green-3)",
        background: "var(--green-4)"
    },
    [ProjectState.Pending]: {
        title: "Pendiente",
        color: "var(--yellow-1)",
        background: "var(--orange-4)"
    }
};
