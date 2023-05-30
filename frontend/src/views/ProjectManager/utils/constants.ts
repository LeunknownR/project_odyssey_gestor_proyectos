import { MOBILE_WIDTH } from "src/config/constants";
import { ProjectForStateForm } from "../types";

export const TEXT_FIELD_PROPS = {
    PROJECT_NAME: {
        label: "Nombre del proyecto",
        placeholder: "Ejm: Mi superproyecto",
        name: "name"
    },
    PROJECT_DESCRIPTION: {
        label: "Descripción",
        placeholder:
            "Ejm: Proyecto para desarrollar el gran proyecto del siglo XXI.",
        maxLength: 200,
        name: "description",
    },
    PROJECT_START: {
        placeholder: "Fecha de inicio",
        name: "startDate",
        width: "100%"
    },
    PROJECT_END: {
        placeholder: "Fecha de finalización",
        name: "endDate",
        width: "100%"
    },
    PROJECT_LEADER: {
        placeholder: "Ejm: Ral",
        name: "leaderId"
    }
};
export const INITIAL_FORM: ProjectForStateForm = {
    id: 0,
    name: "",
    description: "",
    startDate: -1,
    endDate: -1,
    leaderId: 0,
};
