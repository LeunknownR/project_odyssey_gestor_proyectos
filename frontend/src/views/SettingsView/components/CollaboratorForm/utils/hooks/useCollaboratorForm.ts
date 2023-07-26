import { useEffect, useState } from "react";
import { CollaboratorForm, CollaboratorFormErrors, FormCollaboratorHandler } from "../../types";
import { INITIAL_COLLABORATOR_FORM, INITIAL_ERRORS } from "../constants";
import { User } from "src/entities/user/types";
import { CreateCollaboratorBody, UpdateCollaboratorBody } from "src/services/collaboratorConfig/types";
import { FORM_VALIDATIONS } from "src/views/SettingsView/utils/constants";

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
        // setErrors({ ...INITIAL_ERRORS });
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
            collaboratorPassword: INITIAL_COLLABORATOR_FORM.collaboratorPassword,
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
            collaboratorName &&
                collaboratorSurname &&
                collaboratorEmail &&
                collaboratorUsername &&
                (!changePassword || collaboratorPassword)
        );
    };
    const formHaveChanges = (): boolean => {
        if (!currentCollaborator) return true;
        const {
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            toChangeCollaboratorPassword,
        } = form;
        return (
            collaboratorName !== currentCollaborator.name ||
            collaboratorSurname !== currentCollaborator.surname ||
            collaboratorEmail !== currentCollaborator.email ||
            collaboratorUsername !== currentCollaborator.username ||
            toChangeCollaboratorPassword
        );
    };
    const changeField = (field: string, value: any) => {
        setForm(prev => ({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }));
        // setErrors({ ...INITIAL_ERRORS });
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
            photoInBase64: collaboratorPhotoB64,
            password: collaboratorPassword,
        };
        return collaborator;
    };
    //validar que exista id al actualizar
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
        } = form;
        const collaborator: UpdateCollaboratorBody = {
            name: collaboratorName,
            surname: collaboratorSurname,
            email: collaboratorEmail,
            username: collaboratorUsername,
            photo: {
                base64: collaboratorPhotoB64,
                changePhoto: collaboratorChangePhoto,
            },
            password: collaboratorPassword,
        };
        if (id) collaborator.id = id;
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
        setErrors(INITIAL_ERRORS);
        const {
            collaboratorDni,
            collaboratorPhone,
            collaboratorUsername,
            collaboratorPassword,
            toChangeCollaboratorPassword,
        } = form;
        let existErrors = false;
        if (fillError("collaboratorDni", collaboratorDni)) existErrors = true;
        if (fillError("collaboratorPhone", collaboratorPhone)) existErrors = true;
        if (fillError("collaboratorUsername", collaboratorUsername)) existErrors = true;
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
        }
    };
};

export default useCollaboratorForm;
