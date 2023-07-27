import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { FormBodyProps } from "./types";
import ErrorMessage from "src/components/ErrorMessage/ErrorMessage";
import { Container } from "./styles";

const FormBody = ({
    username,
    password,
    handleChange,
    error,
}: FormBodyProps) => {
    return (
        <Container direction="column" width="85%" gap="11px">
            <CustomTextField
                placeholder="Ejm: rcarrasco"
                label="Usuario"
                name="username"
                variant="login"
                value={username}
                onChange={handleChange}
                error={error && ""}
            />
            <CustomTextField
                type="password"
                label="Contraseña"
                name="password"
                variant="login"
                value={password}
                onChange={handleChange}
                error={error && ""}
            /> 
            <ErrorMessage text={error} />
        </Container>
    );
};

export default FormBody;
