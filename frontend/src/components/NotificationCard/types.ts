export type NotificationCardHook = {
    visible: boolean;
    timeoutToClose: number;
    hide: () => void;
    show: (millis?: number) => void;
    cardAppearanceProps: CardTypeVisual;
    changeAppearance: (appearanceProps: CardTypeVisual) => void
};
export type NotificationCardProps = {
    appearanceProps: CardTypeVisual;
    handler: NotificationCardHook;
};
export type CardTypeVisual = {
    title: string;
    subtitle: string;
    color: string;
}
