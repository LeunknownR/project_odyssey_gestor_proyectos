import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TextInputTarget } from "src/components/CustomTextField/types";
import { LoginFormTypes } from "../../types";
import { ERROR_MESSAGES, INITIAL_CREDENTIALS } from "../constants";
import { LoginFormHook } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { requestLogin } from "src/services/authentication/auth";
import { AuthData } from "src/entities/user/types";
import { currentUserLocalStorage, tokenLocalStorage } from "src/storage/user.local";

const useLoginForm = (): LoginFormHook => {
    // const { checkExpirationTimeToken } = useMainContext();
    //#region States
    const [form, setForm] = useState<LoginFormTypes>({...INITIAL_CREDENTIALS});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    //#endregion
    const navigate = useNavigate();
    //#region Functions
    const handleChange = ({ target: { name, value } }: TextInputTarget): void => {
        setForm({
            ...form,
            [name]: value,
        });
        setError(null);
    };
    const existsErrors = (): boolean => {
        const { username, password } = form;
        return Boolean(!username.trim() || !password.trim());
    };
    const isCompletedForm = (): boolean => {
        return Boolean(form.username && form.password);
    };
    const clearForm = (): void => {
        setForm({ ...INITIAL_CREDENTIALS });
    };
    const clearPassword = (): void => {
        setForm({ ...form, password: "" });
    };
    const handleSubmit = async (e: Event): Promise<void> => {
        e.preventDefault();
        if (existsErrors()) return;
        setLoading(true);
        const {data, message} = await requestLogin(form);
        setLoading(false);
        if (checkErrors(message, data)) return;
        // Éxito
        saveAuthData(data);
        navigate(AbsolutePaths.ProjectManager);
        // checkExpirationTimeToken.init();
    };
    const checkErrors = (message: string, data: AuthData | null): boolean => {
        if (message) 
            setError(ERROR_MESSAGES[message]);
        if (message === "INVALID_PASSWORD") {
            clearPassword();
            return true;
        }
        if (message === "INVALID_USER") {
            clearForm();
            return true;
        }
        if (!data?.user.role.id) {
            setError(ERROR_MESSAGES.FATAL_ERROR);
            return true;
        }
        return false;
    }
    const saveAuthData = (authData: AuthData | null): void => {
        if (!authData) return;
        tokenLocalStorage.set(authData.token)
        currentUserLocalStorage.set(authData.user)
    }
    //#endregion
    return {
        form: {
            value: form,
            isCompleted: isCompletedForm,
        },
        error,
        loading,
        handleChange,
        handleSubmit,
    };
};

export default useLoginForm;
