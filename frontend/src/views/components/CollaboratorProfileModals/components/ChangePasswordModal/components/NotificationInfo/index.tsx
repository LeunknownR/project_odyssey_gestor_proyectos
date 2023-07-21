import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "./styles";

const NotificationInfo = () => {
    return (
        <Container>
            <Icon icon="ic:baseline-info" />
            <p>
                Para cambiar tu contraseña es necesario que ingreses tu actual
                credencial primero.
            </p>
        </Container>
    );
};

export default NotificationInfo;
