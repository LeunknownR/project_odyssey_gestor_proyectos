import { useState, useEffect, useRef } from "react";
import { DataDraggingTaskCard, DraggingTaskCardHook } from "./types";

const useDraggingTaskCard = (
    containerRef: React.MutableRefObject<HTMLLIElement | null | undefined>
): DraggingTaskCardHook => {
    const dataDraggingCardRef = useRef<DataDraggingTaskCard | null>();
    //#region States
    const [dataDraggingCard, setDataDraggingCard] = useState<DataDraggingTaskCard | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!containerRef.current || 
                containerRef.current === e.target ||
                containerRef.current.contains(e.target as Node) ||
                !dataDraggingCardRef.current) {
                return;
            }
            setDataDraggingCard({
                ...dataDraggingCardRef.current,
                left: e.clientX - dataDraggingCardRef.current.width/2,
                top: e.clientY - dataDraggingCardRef.current.height/2
            });
        };
        const onMouseUp = (e: MouseEvent) => {
            if (!containerRef.current || 
                !e.target ||
                containerRef.current === e.target ||
                containerRef.current.contains(e.target as Node) ||
                !dataDraggingCardRef.current) 
                return;
            setDataDraggingCard(null); 
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };
    }, []);
    useEffect(() => {
        dataDraggingCardRef.current = dataDraggingCard;
    }, [dataDraggingCard]);
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
        setDataDraggingCard({
            left: offsetLeft, top: offsetTop, 
            width: clientWidth, height: clientHeight
        });
        setIsDragging(false);
    }
    const onMouseMove: React.DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        if (!containerRef.current || !dataDraggingCard) return;
        if (!isDragging) setIsDragging(true);
        setDataDraggingCard(prev => (prev && {
            ...prev,
            left: e.clientX - prev.width/2,
            top: e.clientY - prev.height/2
        }));
    }
    const onMouseUp = (): void => {
        if (!dataDraggingCard) return;
        setDataDraggingCard(null);
    }
    //#endregion
    return {
        dataDraggingCard,
        isDragging,
        events: {
            onMouseDown,
            onMouseMove,
            onMouseUp
        }
    };
}

export default useDraggingTaskCard;