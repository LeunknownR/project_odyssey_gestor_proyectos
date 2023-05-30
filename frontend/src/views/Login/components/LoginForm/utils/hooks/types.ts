import { TextInputTarget } from "src/components/CustomTextField/types";
import { LoginFormTypes } from "../../types";

export type LoginFormHook = {
    form: FormTypes;
    error: string | null;
    loading: boolean;
    handleChange: ({ target: { name, value } }: TextInputTarget) => void;
    handleSubmit: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
};
type FormTypes = {
    value: LoginFormTypes;
    isCompleted: () => boolean;
};
