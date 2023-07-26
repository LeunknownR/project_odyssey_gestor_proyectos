import { CreateCollaboratorBody, UpdateCollaboratorBody } from "src/services/collaboratorConfig/types";

export type FormCollaboratorHandler = {
    value: CollaboratorForm;
    isCompleted: () => boolean;
    haveChanges: () => boolean;
    change: (field: string, value: any) => void;
    getCollaboratorFromFormToCreate: () => CreateCollaboratorBody;
    getCollaboratorFromFormToUpdate: () => UpdateCollaboratorBody;
    validate: () => boolean;
    errors: ErrorsHandler;
};
export type CollaboratorForm = {
    id: number | null;
    collaboratorName: string;
    collaboratorSurname: string;
    collaboratorEmail: string;
    collaboratorUsername: string;
    collaboratorPassword: string;
    collaboratorUrlPhoto: string | null;
    collaboratorPhotoB64: string | null;
    collaboratorChangePhoto: boolean;
    toChangeCollaboratorPassword: boolean;
    [key:string]: any;
}
export type CollaboratorFormErrors = {
    collaboratorName: string | null;
    collaboratorSurname: string | null;
    collaboratorEmail: string | null;
    collaboratorUsername: string | null;
    collaboratorPassword: string | null;
    collaboratorPhoto: string | null;
}
type ErrorsHandler = {
    value: CollaboratorFormErrors;
    change: (field: string, value: string | null) => void
}