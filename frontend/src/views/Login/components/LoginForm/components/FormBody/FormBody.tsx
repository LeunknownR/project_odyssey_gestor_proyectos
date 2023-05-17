import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { Column } from "src/components/styles";

const FormBody = () => {
    return (
        <Column width="85%" gap="11px">
            <CustomTextField placeholder="Ejm: rcarrasco" label="Usuario" variant="login"/>
            <CustomTextField type="password" label="Contraseña" variant="login"/>
        </Column>
    );
};

export default FormBody;
