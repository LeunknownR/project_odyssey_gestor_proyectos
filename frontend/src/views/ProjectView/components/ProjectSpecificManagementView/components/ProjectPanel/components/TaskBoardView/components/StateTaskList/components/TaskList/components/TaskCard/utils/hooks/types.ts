export type DataDraggingTaskCard = {
    left: number;
    top: number;
    width: number;
    height: number;
};
export type TaskCardEventDragginHandler = {
    onMouseDown: React.MouseEventHandler<HTMLLIElement>;
    onMouseMove: React.MouseEventHandler<HTMLLIElement>;
    onMouseUp: React.MouseEventHandler<HTMLLIElement>;
}
export type DraggingTaskCardHook = {
    data: DataDraggingTaskCard | null;
    events: TaskCardEventDragginHandler;
};