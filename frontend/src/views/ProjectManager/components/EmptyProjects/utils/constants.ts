import { DBRoles } from "src/config/roles";
import { EmptyProjectVisual } from "../types";

export const EMPTY_PROJECT_TEST: Record<string, EmptyProjectVisual> = {
    [DBRoles.GeneralAdmin]: {
        title: "No tienes proyectos creados",
        subtitle: "Cuando crees proyectos aparecerán aquí",
    },
    [DBRoles.Collaborator]: {
        title: "No tienes proyectos asignados",
        subtitle: "Cuando te asignen proyectos aparecerán aquí",
    },
};
