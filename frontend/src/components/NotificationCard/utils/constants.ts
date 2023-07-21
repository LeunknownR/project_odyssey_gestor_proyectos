import { CardTypeVisual, AppearanceProps } from "../types";

export const DEFAULT_TIMEOUT_SECONDS_TO_CLOSE_NOTIFICATION_CARD = 5;
export const TRANSITION_PROGRESS_BAR = "0.35s";
export const DELTA_SECONDS = 0.1;

export const VARIANT: Record<AppearanceProps, CardTypeVisual> = {
    [AppearanceProps.Default]: {
        title: "CAMBIOS GUARDADOS",
        subtitle: "Los cambios realizados se guardaron correctamente",
        color: "var(--green-2)",
    },
    [AppearanceProps.CreateProject]: {
        title: "PROYECTO CREADO",
        subtitle: "El proyecto ha sido creado correctamente",
        color: "var(--green-2)",
    },
    [AppearanceProps.UpdateProject]: {
        title: "PROYECTO ACTUALIZADO",
        subtitle: "El proyecto ha sido actualizado correctamente",
        color: "var(--green-2)",
    },
    [AppearanceProps.DeleteProject]: {
        title: "PROYECTO ELIMINADO",
        subtitle: "El proyecto ha sido eliminado correctamente",
        color: "var(--red-3)",
    },
    [AppearanceProps.AddMember]: {
        title: "MIEMBRO AÑADIDO",
        subtitle: "El miembro ha sido añadido correctamente",
        color: "var(--green-2)",
    },
    [AppearanceProps.DeleteMember]: {
        title: "MIEMBRO ELIMINADO",
        subtitle: "El miembro ha sido eliminado correctamente",
        color: "var(--red-3)",
    },
    [AppearanceProps.UpdateDate]: {
        title: "FECHA ACTUALIZADA",
        subtitle: "La fecha de finalización ha sido actualizada correctamente",
        color: "var(--green-2)",
    },
    [AppearanceProps.DeleteTask]: {
        title: "TAREA ELIMINADA",
        subtitle: "La tarea ha sido eliminada correctamente",
        color: "var(--red-3)",
    },
};
