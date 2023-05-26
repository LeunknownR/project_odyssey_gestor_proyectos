import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "../styles";
import {
    CloseIconContainer,
    Container,
    IconContainer,
    TextModal,
    TitleModal,
} from "./styles";
import { NotificationCardProps } from "./types";
import {useEffect, useState} from "react";
import {
    DELTA_SECONDS } from "./utils/constants";

const NotificationCard = ({
    handler,
    show,
    maxSeconds,
    variant = "success",
}: NotificationCardProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(maxSeconds);
    const [loadingBarIntervalId, setLoadingBarIntervalId] = useState<
        NodeJS.Timeout | undefined
    >();
    const [progress, setProgress] = useState(0);
    //#region Effects
    const initChronometer = () => {
        if (!show) return;
        let intervalId: NodeJS.Timeout | undefined;
        setTimeout(() => {
            intervalId = setInterval(() => {
                setTimeLeft(currentTimeLeft => {
                    // Eliminando interval al término del tiempo determinado
                    if (currentTimeLeft <= 0) {
                        clearInterval(intervalId);
                        handler.hide();
                        return 0;
                    }
                    return currentTimeLeft - DELTA_SECONDS;
                });
            }, DELTA_SECONDS * 1000);
            setLoadingBarIntervalId(intervalId);
        }, 100);
        return () => clearInterval(intervalId);
    };
    useEffect(initChronometer, [show]);
    useEffect(() => {
        fillProgress();
    }, [timeLeft]);
    useEffect(() => {
        if (!show) {
            clearInterval(loadingBarIntervalId);
            return;
        }
        setTimeLeft(maxSeconds);
    }, [show]);
    //#endregion
    //#region Functions
    const fillProgress = () => {
        setProgress((timeLeft / maxSeconds) * 100);
    };
    const getClassName = (): string => {
        const classList: string[] = [variant];
        handler.visible && classList.push("visible");
        return classList.join(" ");
    };
    return (
        <Container
            className={getClassName()}
            progress={progress}>
            <CloseIconContainer onClick={() => handler.hide()}>
                <Icon icon="mdi:close" />
            </CloseIconContainer>
            <Row align="center" gap="10px">
                <IconContainer>
                    <Icon icon="material-symbols:check-circle-outline" />
                </IconContainer>
                <TitleModal>CAMBIOS GUARDADOS</TitleModal>
            </Row>
            <TextModal>Los cambios realizados se guardaron correctamente.</TextModal>
        </Container>
    );
};

export default NotificationCard;
