import { useEffect, useState, useRef } from "react";
import { Shadow } from "./styles";
import { TaskCardProps } from "./types";
import TaskCardContent from "./TaskCardContent";
import useDraggingTaskCard from "./utils/hooks/useDraggingTaskCard";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import { getUserId } from "src/storage/user.local";
import { DBProjectRoles } from "src/config/roles";

const TaskCard = (props: TaskCardProps) => {
    const containerRef = useRef<HTMLLIElement>(null);
    const { 
        projectRoleId
    } = useTaskBoardContext();
    const [canEditing, setCanEditing] = useState<boolean>(false);
    const draggingTaskCard = useDraggingTaskCard(
        containerRef, 
        props, 
        canEditing
    );
    useEffect(() => {
        setCanEditing(projectRoleId === DBProjectRoles.ProjectLeader || props.task.responsible?.id === getUserId());
    }, []);
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
            canEditing={canEditing}
            {...props}
        />
        </>
    );
};

export default TaskCard;
