export type NotificationCardHook = {
    visible: boolean;
    timeoutToClose: number;
    hide: () => void;
    show: (millis?: number) => void;
    cardAppearanceProps: AppearanceProps;
    changeAppearance: (appearanceProps: AppearanceProps) => void
};
export type NotificationCardProps = {
    appearanceProps: AppearanceProps;
    handler: NotificationCardHook;
};
export enum AppearanceProps {
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
