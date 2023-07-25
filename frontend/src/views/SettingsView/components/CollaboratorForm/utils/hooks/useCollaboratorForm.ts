import { useEffect, useState } from "react";
import { CollaboratorForm } from "../../types";
// import { FORM_VALIDATIONS, INITIAL_ERRORS, INITIAL_FORM } from "../constants";
import { INITIAL_COLLABORATOR_FORM } from "../constants";
import { User } from "src/entities/user/types";
import { FormCollaboratorHook } from "./types";

const useCollaboratorForm = (currentCollaborator: User | null): FormCollaboratorHook => {
    const [form, setForm] = useState<CollaboratorForm>({ ...INITIAL_COLLABORATOR_FORM });
    // const [errors, setErrors] = useState<CollaboratorFormErrors>({
    //     ...INITIAL_ERRORS,
    // });
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
            id: currentCollaborator.id || 0,
            collaboratorName: currentCollaborator.name,
            collaboratorSurname: currentCollaborator.surname,
            collaboratorEmail: currentCollaborator.email,
            collaboratorUsername: currentCollaborator.username,
            collaboratorPassword: "",
            toChangeCollaboratorPassword: false,
            collaboratorPhotoUrl: currentCollaborator.urlPhoto,
            collaboratorPhotoB64: INITIAL_COLLABORATOR_FORM.collaboratorPhotoB64,
            collaboratorChangePhoto: INITIAL_COLLABORATOR_FORM.collaboratorChangePhoto,
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
            collaboratorPhotoB64,
            collaboratorChangePhoto,
            toChangeCollaboratorPassword,
        } = form;
        return (
            collaboratorName !== currentCollaborator.name ||
            collaboratorSurname !== currentCollaborator.surname ||
            collaboratorEmail !== currentCollaborator.email ||
            collaboratorUsername !== currentCollaborator.username ||
            collaboratorPhotoB64 !== INITIAL_COLLABORATOR_FORM.collaboratorPhotoB64 ||
            collaboratorChangePhoto !== INITIAL_COLLABORATOR_FORM.collaboratorChangePhoto ||
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
    const getCollaboratorFromForm = (): User => {
        const {
            id,
            collaboratorName,
            collaboratorSurname,
            collaboratorEmail,
            collaboratorUsername,
            collaboratorPassword,
            toChangeCollaboratorPassword,
            collaboratorPhotoB64,
            collaboratorChangePhoto,
        } = form;
        const collaborator: User = {
            name: collaboratorName,
            surname: collaboratorSurname,
            email: collaboratorEmail,
            username: collaboratorUsername,
            photo: {
                url: null,
                base64: !collaboratorPhotoB64 ? null : collaboratorPhotoB64.split(",")[1],
                changePhoto: collaboratorChangePhoto,
            },
        };
        if (id) collaborator.id = id;
        // if (toChangeCollaboratorPassword) collaborator.password = collaboratorPassword;
        return collaborator;
    };
    // const changeErrorField = (field: string, value: string | null) => {
    //     setErrors(prev => ({
    //         ...prev,
    //         [field]: value,
    //     }));
    // };
    // const fillError = (field: string, value: string) => {
    //     const formValidations = FORM_VALIDATIONS[field];
    //     if (formValidations.regex.test(value)) return false;
    //     changeErrorField(field, formValidations.text);
    //     return true;
    // };
    // const validateForm = () => {
    //     setErrors(INITIAL_ERRORS);
    //     const {
    //         collaboratorDni,
    //         collaboratorPhone,
    //         collaboratorUsername,
    //         collaboratorPassword,
    //         toChangeCollaboratorPassword,
    //     } = form;
    //     let existErrors = false;
    //     if (fillError("collaboratorDni", collaboratorDni)) existErrors = true;
    //     if (fillError("collaboratorPhone", collaboratorPhone)) existErrors = true;
    //     if (fillError("collaboratorUsername", collaboratorUsername)) existErrors = true;
    //     if (
    //         toChangeCollaboratorPassword &&
    //         fillError("collaboratorPassword", collaboratorPassword)
    //     )
    //         existErrors = true;
    //     return !existErrors;
    // };
    return {
        form: {
            value: form,
            isCompleted: isCompletedForm,
            haveChanges: formHaveChanges,
            change: changeField,
            // validate: validateForm,
        },
        getCollaboratorFromForm,
        // errors: {
        //     value: errors,
        //     change: changeErrorField,
        // }
    };
};

export default useCollaboratorForm;
