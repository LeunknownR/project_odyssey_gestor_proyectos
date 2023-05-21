import { TextInputTarget } from "src/components/CustomTextField/types";

export type FormBodyProps = {
    username: string;
    password: string;
    handleChange: ({ target: { name, value } }: TextInputTarget) => void;
    error: string | null;
};
