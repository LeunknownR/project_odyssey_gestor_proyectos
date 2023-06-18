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
    data: DataDraggingTaskCard | null;
    events: TaskCardEventDragginHandler;
    hasClicked: boolean;
    isDragging: () => boolean;
};