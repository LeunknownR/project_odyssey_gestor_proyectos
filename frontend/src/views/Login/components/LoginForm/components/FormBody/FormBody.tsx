import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { Column } from "src/components/styles";
import { FormBodyProps } from "./types";
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage";

const FormBody = ({
    username,
    password,
    handleChange,
    error,
}: FormBodyProps) => {
    return (
        <Column width="85%" gap="11px">
            <CustomTextField
                placeholder="Ejm: rcarrasco"
                label="Usuario"
                name="username"
                variant="login"
                value={username}
                onChange={handleChange}
            />
            <CustomTextField
                type="password"
                label="Contraseña"
                name="password"
                variant="login"
                value={password}
                onChange={handleChange}
            />
            <ErrorMessage text={error} />
        </Column>
    );
};

export default FormBody;
