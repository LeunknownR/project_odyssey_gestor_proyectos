import { useEffect, useState, useRef } from "react";
import { Shadow } from "./styles";
import { TaskCardProps } from "./types";
import TaskCardContent from "./TaskCardContent";
import useDraggingTaskCard from "./utils/hooks/useDraggingTaskCard";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const TaskCard = (props: TaskCardProps) => {
    const { task } = props;
    const containerRef = useRef<HTMLLIElement | null>(null);
    const { getCanBeEditedTask } = useTaskBoardContext();
    const [canEditCurrentTask, setCanEditing] = useState<boolean>(false);
    const draggingTaskCard = useDraggingTaskCard(
        containerRef,
        props,
        canEditCurrentTask
    );
    useEffect(() => {
        setCanEditing(getCanBeEditedTask(task.responsible));
    }, [task.responsible]);
    return (
        <>
            {draggingTaskCard.data && (
                <Shadow
                    height={draggingTaskCard.data.height}
                    className={draggingTaskCard.data ? "dragging" : ""}
                />
            )}
            <TaskCardContent
                containerRef={containerRef}
                draggingTaskCard={draggingTaskCard}
                canEditCurrentTask={canEditCurrentTask}
                {...props}
            />
        </>
    );
};

export default TaskCard;
