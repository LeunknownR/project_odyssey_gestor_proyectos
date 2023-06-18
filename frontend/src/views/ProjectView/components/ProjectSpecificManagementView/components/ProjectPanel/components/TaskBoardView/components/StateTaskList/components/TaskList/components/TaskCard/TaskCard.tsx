import { useRef } from "react";
import {
    Shadow
} from "./styles";
import { TaskCardProps } from "./types";
import TaskCardContent from "./TaskCardContent";
import useDraggingTaskCard from "./utils/hooks/useDraggingTaskCard";

const TaskCard = ({ 
    task, state
}: TaskCardProps) => {
    const containerRef = useRef<HTMLLIElement>(null);
    const draggingTaskCard = useDraggingTaskCard(containerRef);
    return (
        <>
        {draggingTaskCard.isDragging() &&
        <Shadow height={draggingTaskCard.data?.height}/>}
        <TaskCardContent
            ref={containerRef}
            draggingTaskCard={draggingTaskCard}
            state={state}
            task={task}/>
        </>
    );
};

export default TaskCard;
