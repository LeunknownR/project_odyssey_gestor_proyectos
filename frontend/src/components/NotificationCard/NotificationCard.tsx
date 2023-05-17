import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "../styles";
import { CloseIconContainer, Container, IconContainer, TextModal, TitleModal } from "./styles";
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
            <CloseIconContainer onClick={() => handler.hide()}><Icon icon="mdi:close" /></CloseIconContainer>
            <Row align="center" gap="10px" justifySelf="flex-start">
                <IconContainer><Icon icon="material-symbols:check-circle-outline" /></IconContainer>
                <TitleModal>CAMBIOS GUARDADOS</TitleModal>
            </Row>
            <TextModal>Los cambios que hizo se han guardado correctamente.</TextModal>
        </Container>
    );
}

export default NotificationCard;