import { useEffect, useState, useRef } from "react";
import { NotificationCardHook } from "../../types";
import { DEFAULT_TIMEOUT_SECONDS_TO_CLOSE_NOTIFICATION_CARD } from "../constants";

export const useNotificationCard = (
    initialValue?: boolean,
    timeoutToClose?: number
): NotificationCardHook => {
    //#region States
    const [visible, setVisible] = useState<boolean>(initialValue || false);
    const [timeoutToCloseId, setTimeoutToCloseId] = useState<number>();
    //#endregion
    //#region Ref
    const timeoutToCloseRef = useRef<number>(timeoutToClose || DEFAULT_TIMEOUT_SECONDS_TO_CLOSE_NOTIFICATION_CARD);
    //#endregion
    //#region Effects
    useEffect(() => {
        if (!visible) return;
        runTimeout();
    }, []);
    //#endregion
    //#region Functions
    const hide = (): void => {
        setVisible(false);
        clearTimeout(timeoutToCloseId);
    }
    const show = (): void => {
        setVisible(true);
        runTimeout();
    }
    function runTimeout(): void {
        const timeoutToCloseId: number = window.setTimeout(hide, timeoutToCloseRef.current * 1000);
        setTimeoutToCloseId(timeoutToCloseId);
    }
    //#endregion
    return {
        visible, hide, show,
        timeoutToClose: timeoutToCloseRef.current
    };
}

export default useNotificationCard;