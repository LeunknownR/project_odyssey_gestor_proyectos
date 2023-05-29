import { CardTypeVisual, CardVariant } from "../types";

export const DEFAULT_TIMEOUT_SECONDS_TO_CLOSE_NOTIFICATION_CARD = 5;
export const TRANSITION_PROGRESS_BAR = "0.35s";
export const DELTA_SECONDS = 0.1;

export const VARIANT: Record<CardVariant, CardTypeVisual> = {
    [CardVariant.Default]: {
        title: "CAMBIOS GUARDADOS",
        subtitle: "Los cambios realizados se guardaron correctamente"
    },
    [CardVariant.CreateProject]: {
        title: "PROYECTO CREADO",
        subtitle: "El proyecto ha sido creado correctamente"
    },
    [CardVariant.UpdateProject]: {
        title: "PROYECTO ACTUALIZADO",
        subtitle: "El proyecto ha sido actualizado correctamente"
    },
    [CardVariant.DeleteProject]: {
        title: "PROYECTO ELIMINADO",
        subtitle: "El proyecto ha sido eliminado correctamente"
    },
    [CardVariant.AddMember]: {
        title: "MIEMBRO AÑADIDO",
        subtitle: "El miembro ha sido añadido correctamente"
    },
    [CardVariant.DeleteMember]: {
        title: "MIEMBRO ELIMINADO",
        subtitle: "El miembro ha sido eliminado correctamente"
    },
    [CardVariant.UpdateDate]: {
        title: "FECHA ACTUALIZADA",
        subtitle: "La fecha de finalización ha sido actualizada correctamente"
    }
}