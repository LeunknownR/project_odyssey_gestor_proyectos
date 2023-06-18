export type NotificationCardHook = {
    visible: boolean;
    timeoutToClose: number;
    hide: () => void;
    show: (millis?: number) => void;
    cardVariant: CardVariant;
    changeVariant: (variant: CardVariant) => void
};
export type NotificationCardProps = {
    variant: CardVariant;
    handler: NotificationCardHook;
};
export enum CardVariant {
    Default = "default",
    CreateProject = "create-project",
    UpdateProject = "update-project",
    DeleteProject = "delete-project",
    DeleteMember = "delete-member",
    AddMember = "add-member",
    UpdateDate = "update-date",
    DeleteTask = "delete-task"
}
export type CardTypeVisual = {
    title: string;
    subtitle: string;
    color: string;
}
