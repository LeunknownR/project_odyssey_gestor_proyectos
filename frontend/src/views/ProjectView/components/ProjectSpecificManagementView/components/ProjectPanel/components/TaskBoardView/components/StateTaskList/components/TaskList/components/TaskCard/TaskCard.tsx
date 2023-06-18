import { useRef } from "react";
import { Shadow } from "./styles";
import { TaskCardProps } from "./types";
import TaskCardContent from "./TaskCardContent";
import useDraggingTaskCard from "./utils/hooks/useDraggingTaskCard";

const TaskCard = (props: TaskCardProps) => {
    const containerRef = useRef<HTMLLIElement>(null);
    const draggingTaskCard = useDraggingTaskCard(containerRef, props);
    return (
        <>
        {draggingTaskCard.data && (
            <Shadow
                height={draggingTaskCard.data.height}
                className={draggingTaskCard.data ? "dragging" : ""}
            />
        )}
        <TaskCardContent
            ref={containerRef}
            draggingTaskCard={draggingTaskCard}
            {...props}
        />
        </>
    );
};

export default TaskCard;
