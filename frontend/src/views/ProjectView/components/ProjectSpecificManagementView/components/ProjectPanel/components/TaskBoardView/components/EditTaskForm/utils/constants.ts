import { ProjectTaskForm } from "../types";

export const TASK_FIELD_PROPS = {
    TASK_RESPONSIBLE: {
        placeholder: "Busca el colaborador...",
        name: "responsibleId"
    },
    TASK_DEADLINE: {
        placeholder: "Selecciona una fecha",
        maxLength: 200,
        width: "200px",
        name: "deadline"
    },
    TASK_DESCRIPTION: {
        label: "Descripción",
        variant: "primary",
        placeholder: "Ejm: Modelar la base de datos del sistema",
        maxLength: 200,
        name: "description",
    },
    TASK_COMMENT: {
        placeholder: "Redacte su comentario aquí...",
        variant: "primary",
        maxLength: 200,
        // name: "comment",
    },
};
export const INITIAL_FORM: ProjectTaskForm = {
    id: 0,
    responsibleId: null,
    name: "",
    description: "",
    deadline: -1,
    priorityId: null,
};
