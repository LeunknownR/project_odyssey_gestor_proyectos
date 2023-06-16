import { useRef } from "react";
import {
    Shadow
} from "./styles";
import { TaskCardProps } from "./types";
import TaskCardContent from "./compontent/TaskCardContent";
import useDraggingTaskCard from "./utils/hooks/useDraggingTaskCard";

const TaskCard = ({ 
    taskInfo, 
    openTaskMenu, 
    state
}: TaskCardProps) => {
    const containerRef = useRef<HTMLLIElement>(null);
    const draggingTaskCard = useDraggingTaskCard(containerRef);
    return (
        <>
        {draggingTaskCard.dataDraggingCard &&
        <Shadow
            height={draggingTaskCard.dataDraggingCard?.height}/>}
        <TaskCardContent
            ref={containerRef}
            draggingTaskCard={draggingTaskCard}
            openTaskMenu={openTaskMenu}
            state={state}
            taskInfo={taskInfo}/>
        </>
    );
};

export default TaskCard;
