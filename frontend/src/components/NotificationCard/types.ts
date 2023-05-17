export type NotificationCardHook = {
    visible: boolean,
    timeoutToClose: number,
    hide: () => void,
    show: (millis?: number) => void
};
export type NotificationCardProps = {
    variant?: "success" | "error" | "warning",
    handler: NotificationCardHook
};