import { useEffect, useState } from "react";
import {
    CollaboratorForm,
    CollaboratorFormErrors,
    FormCollaboratorHandler,
} from "../../types";
import { INITIAL_COLLABORATOR_FORM, INITIAL_ERRORS } from "../constants";
import { User } from "src/entities/user/types";
import {
    CreateCollaboratorBody,
    UpdateCollaboratorBody,
} from "src/services/collaboratorConfig/types";
import { FORM_VALIDATIONS } from "src/views/SettingsView/utils/constants";
import { getB64Value } from "src/utils/fileToBase64";

const useCollaboratorForm = (
    currentCollaborator: User | null
): FormCollaboratorHandler => {
    const [form, setForm] = useState<CollaboratorForm>({
        ...INITIAL_COLLABORATOR_FORM,
    });
    const [errors, setErrors] = useState<CollaboratorFormErrors>({
        ...INITIAL_ERRORS,
    });
    useEffect(() => {
        initForm();
    }, [currentCollaborator]);
    const initForm = () => {
        setErrors({ ...INITIAL_ERRORS });
        if (!currentCollaborator) {
            setForm({ ...INITIAL_COLLABORATOR_FORM });
            return;
        }
        //GNOMO PREGUNTAR DE DÓNDE SACO LA CONTRA
        setForm({
            id: currentCollaborator.id,
            collaboratorName: currentCollaborator.name,
            collaboratorSurname: currentCollaborator.surname,
            collaboratorEmail: currentCollaborator.email,
            collaboratorUsername: currentCollaborator.username,
            collaboratorPassword:
                INITIAL_COLLABORATOR_FORM.collaboratorPassword,
            toChangeCollaboratorPassword: false,
            collaboratorUrlPhoto: currentCollaborator.urlPhoto,
            collaboratorPhotoB64:
                INITIAL_COLLABORATOR_FORM.collaboratorPhotoB64,
            collaboratorChangePhoto:
                INITIAL_COLLABORATOR_FORM.collaboratorChangePhoto,
        });
    };
    const isCompletedForm = (): boolean => {
        const {
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            collaboratorPassword,
            toChangeCollaboratorPassword: changePassword,
        } = form;
        return Boolean(
            collaboratorName.trim() &&
            collaboratorSurname.trim() &&
            collaboratorEmail.trim() &&
            collaboratorUsername.trim() &&
            (!changePassword || collaboratorPassword.trim())
        );
    };
    const formHaveChanges = (): boolean => {
        if (!currentCollaborator) return true;
        const {
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            collaboratorChangePhoto,
            toChangeCollaboratorPassword,
        } = form;
        return (
            collaboratorName !== currentCollaborator.name ||
            collaboratorSurname !== currentCollaborator.surname ||
            collaboratorEmail !== currentCollaborator.email ||
            collaboratorUsername !== currentCollaborator.username ||
            collaboratorChangePhoto ||
            toChangeCollaboratorPassword
        );
    };
    const changeField = (field: string, value: any): void => {
        setForm(prev => ({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }));
        setErrors({ ...INITIAL_ERRORS });
    };
    const getCollaboratorFromFormToCreate = (): CreateCollaboratorBody => {
        const {
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            collaboratorPhotoB64,
            collaboratorPassword,
        } = form;
        const collaborator: CreateCollaboratorBody = {
            name: collaboratorName,
            surname: collaboratorSurname,
            email: collaboratorEmail,
            username: collaboratorUsername,
            photoInBase64: collaboratorPhotoB64
                ? getB64Value(collaboratorPhotoB64)
                : null,
            password: collaboratorPassword,
        };
        return collaborator;
    };
    const getCollaboratorFromFormToUpdate = (): UpdateCollaboratorBody => {
        const {
            id,
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            collaboratorPhotoB64,
            collaboratorChangePhoto,
            collaboratorPassword,
            toChangeCollaboratorPassword
        } = form;
        const collaborator: UpdateCollaboratorBody = {
            name: collaboratorName,
            surname: collaboratorSurname,
            email: collaboratorEmail,
            username: collaboratorUsername,
            photo: {
                base64: collaboratorPhotoB64
                    ? getB64Value(collaboratorPhotoB64)
                    : null,
                changePhoto: collaboratorChangePhoto,
            },
        };
        if (id) collaborator.id = id;
        toChangeCollaboratorPassword 
            ? collaborator.password = collaboratorPassword
            : collaborator.password = null;
        return collaborator;
    };
    const changeErrorField = (field: string, value: string | null) => {
        setErrors(prev => ({
            ...prev,
            [field]: value,
        }));
    };
    const fillError = (field: string, value: string) => {
        const formValidations = FORM_VALIDATIONS[field];
        if (formValidations.regex.test(value)) return false;
        changeErrorField(field, formValidations.text);
        return true;
    };
    const validateForm = () => {
        setErrors({ ...INITIAL_ERRORS });
        const {
            collaboratorEmail,
            collaboratorUsername,
            collaboratorPassword,
            toChangeCollaboratorPassword,
        } = form;
        let existErrors = false;
        if (fillError("collaboratorEmail", collaboratorEmail))
            existErrors = true;
        if (fillError("collaboratorUsername", collaboratorUsername))
            existErrors = true;
        if (
            toChangeCollaboratorPassword &&
            fillError("collaboratorPassword", collaboratorPassword)
        )
            existErrors = true;
        return !existErrors;
    };
    return {
        value: form,
        isCompleted: isCompletedForm,
        haveChanges: formHaveChanges,
        change: changeField,
        validate: validateForm,
        getCollaboratorFromFormToCreate,
        getCollaboratorFromFormToUpdate,
        errors: {
            value: errors,
            change: changeErrorField,
        },
    };
};

export default useCollaboratorForm;
