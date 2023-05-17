import { Container } from "./styles";
import { NotificationCardProps } from "./types";

const NotificationCard = ({ 
    handler, 
    variant = "success" 
}: NotificationCardProps) => {
    const getClassName = (): string => {
        const classList: string[] = [variant];
        handler.visible && classList.push("visible");
        return classList.join(" "); 
    }
    return (
        <Container className={getClassName()}>
            <button onClick={() => handler.hide()}>x</button>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
            <h1>Notificación</h1>
        </Container>
    );
}

export default NotificationCard;