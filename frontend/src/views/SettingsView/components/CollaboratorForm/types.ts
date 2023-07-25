export type CollaboratorFormProps = {
    hideForm: () => void;
}
export type CollaboratorForm = {
    id: number
    collaboratorName: string;
    collaboratorSurname: string;
    collaboratorEmail: string;
    collaboratorUsername: string;
    collaboratorPassword: string;
    collaboratorPhotoUrl: string | null;
    collaboratorPhotoB64: string | null;
    collaboratorChangePhoto: boolean;
    toChangeCollaboratorPassword: boolean;
    [key:string]: any;
}
export type FormCollaboratorTypes = {
    value: CollaboratorForm;
    isCompleted: () => boolean;
    haveChanges: () => boolean;
    change: (field: string, value: any) => void;
    // validate: () => boolean;
};