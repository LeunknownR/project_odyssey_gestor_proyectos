import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TextInputTarget } from "src/components/CustomTextField/types";
import { LoginFormTypes } from "../../types";
import { ERROR_MESSAGES, INITIAL_CREDENTIALS } from "../constants";
import { LoginFormHook } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { requestLogin } from "src/services/authentication/auth";

const useLoginForm = (): LoginFormHook => {
    // const { checkExpirationTimeToken } = useMainContext();
    //#region States
    const [form, setForm] = useState<LoginFormTypes>({...INITIAL_CREDENTIALS});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    //#endregion
    const navigate = useNavigate();
    //#region Functions
    const handleChange = ({ target: { name, value } }: TextInputTarget) => {
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
    const clearForm = () => {
        setForm({ ...INITIAL_CREDENTIALS });
    };
    const clearPassword = () => {
        setForm({ ...form, password: "" });
    };
    const handleSubmit = async () => {
        if (existsErrors()) return;
        setLoading(true);
        const data = await requestLogin(form);
        setLoading(false);
        //#region Validations
        if (data.message) 
            setError(ERROR_MESSAGES[data.message]);
        if (data.message === "INVALID_PASSWORD") {
            clearPassword();
            return;
        }
        if (data.message === "INVALID_USER") {
            clearForm();
            return;
        }
        //#endregion
        //#cambiar esta wbda GNOMO
        if (!data.data?.user.role.id) {
            setError(ERROR_MESSAGES.FATAL_ERROR);
            return;
        }
        // Éxito
        navigate(AbsolutePaths.PROJECT_MANAGER);
        // checkExpirationTimeToken.init();
    };
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
