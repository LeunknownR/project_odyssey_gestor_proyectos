import { useState, useEffect, useRef } from "react";
import { DataDraggingTaskCard, DraggingTaskCardHook } from "./types";

const useDraggingTaskCard = (
    containerRef: React.MutableRefObject<HTMLLIElement | null | undefined>
): DraggingTaskCardHook => {
    const dataRef = useRef<DataDraggingTaskCard | null>();
    //#region States
    const [data, setData] = useState<DataDraggingTaskCard | null>(null);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
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
        const onMouseUp = (e: MouseEvent) => {
            if (!containerRef.current || 
                !e.target ||
                containerRef.current === e.target ||
                containerRef.current.contains(e.target as Node) ||
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
    const onMouseDown: React.DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        if (!containerRef.current) return;
        const { 
            offsetLeft, 
            offsetTop, 
            clientWidth, 
            clientHeight 
        } = containerRef.current;
        setData({
            left: offsetLeft, top: offsetTop, 
            width: clientWidth, height: clientHeight
        });
        setHasClicked(false);
    }
    const onMouseMove: React.DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        if (!containerRef.current || !data) return;
        if (!hasClicked) setHasClicked(true);
        setData(prev => (prev && {
            ...prev,
            left: e.clientX - prev.width/2,
            top: e.clientY - prev.height/2
        }));
    }
    const onMouseUp = (): void => {
        if (!data) return;
        setData(null);
    }
    const isDragging = (): boolean => {
        return Boolean(hasClicked && data);
    }
    //#endregion
    return {
        data, hasClicked, 
        isDragging, events: {
            onMouseDown,
            onMouseMove,
            onMouseUp
        }
    };
}

export default useDraggingTaskCard;