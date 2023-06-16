export type DataDraggingTaskCard = {
    left: number;
    top: number;
    width: number;
    height: number;
};
export type TaskCardEventDragginHandler = {
    onMouseDown: React.DragEventHandler<HTMLLIElement>;
    onMouseMove: React.DragEventHandler<HTMLLIElement>;
    onMouseUp: () => void;
}
export type DraggingTaskCardHook = {
    dataDraggingCard: DataDraggingTaskCard | null;
    events: TaskCardEventDragginHandler;
    isDragging: boolean;
};