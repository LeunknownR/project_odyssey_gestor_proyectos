import { 
    RefObject, 
    useState, 
    useEffect,
    useRef 
} from "react";
import { DataDraggingTaskCard, DraggingTaskCardHook } from "./types";
import useTaskBoardContext from "../../../../../../../../utils/contexts/useTaskBoardContext";
import { TaskCardProps } from "../../types";

const useDraggingTaskCard = (
    containerRef: RefObject<HTMLLIElement | null | undefined>,
    taskCardProps: TaskCardProps
): DraggingTaskCardHook => {
    const { task, state } = taskCardProps;
    const dataRef = useRef<DataDraggingTaskCard | null>();
    const { 
        fillCurrentProjectTask,
        taskToBeChangedStateHandler 
    } = useTaskBoardContext();
    //#region States
    const [data, setData] = useState<DataDraggingTaskCard | null>(null);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const [wantsDrag, setWantsDrag] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const onMouseMove = (e: MouseEvent): void => {
            if (e.button !== 0) return;
            if (!containerRef.current || 
                containerRef.current === e.target ||
                containerRef.current.contains(e.target as Node) ||
                !dataRef.current) {
                return;
            }
            setData({
                ...dataRef.current,
                left: e.clientX - dataRef.current.width/2,
                top: e.clientY - dataRef.current.height/2
            });
        };
        const onMouseUp = (e: MouseEvent): void => {
            if (e.button !== 0) return;
            const { target } = e;
            if (!containerRef.current || !target) return;
            if (containerRef.current === target ||
                containerRef.current.contains(target as Node) ||
                !dataRef.current) 
                return;
            setData(null);
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };
    }, []);
    useEffect(() => {
        dataRef.current = data;
    }, [data]);
    //#endregion
    //#region Functions
    const onMouseDown: React.MouseEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        if (!containerRef.current || e.button !== 0) return;
        setHasClicked(true);
    }
    const onMouseMove: React.MouseEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        if (
            e.button !== 0 || 
            !containerRef.current || 
            !hasClicked
        ) return;
        const {
            clientWidth, 
            clientHeight
        } = containerRef.current;
        setData(prev => (prev && {
            ...prev,
            left: e.clientX - clientWidth/2,
            top: e.clientY - clientHeight/2
        }));
        if (wantsDrag) return;
        // Empezando dragging
        setData({
            width: clientWidth, height: clientHeight,
            left: e.clientX - clientWidth/2,
            top: e.clientY - clientHeight/2
        });
        taskToBeChangedStateHandler.fill({
            taskId: task.id,
            state
        });
        setWantsDrag(true);
    }
    const onMouseUp: React.MouseEventHandler<HTMLLIElement> = e => {
        if (e.button !== 0) return;
        setHasClicked(false);
        if (!wantsDrag) {
            // Si quiere abrir el formulario de actualización
            fillCurrentProjectTask(task, state);
            return;
        }
        setWantsDrag(false);
        // Si quiere terminar el drag
        setData(null);
    }
    //#endregion
    return {
        data, events: {
            onMouseDown,
            onMouseMove,
            onMouseUp
        }
    };
}

export default useDraggingTaskCard;