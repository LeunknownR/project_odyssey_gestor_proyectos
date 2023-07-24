//#region Libraries
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import { 
    DateText, 
    EmptyTaskPriority, TaskCardName, 
    TaskPriorityImage
} from "../styles";
import { Check, Container, LockedIcon } from "./styles";
//#endregion
//#region Utils
import { TASK_PRIORITY } from "../utils/constants";
import { dayMonthFormat, isDateBeforeToday } from "src/utils/dates";
import { ProjectTaskState } from "src/entities/projectTask/entities";
import useTaskBoardContext from "../../../../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";
//#endregion
//#region Types
import { TaskCardContentProps } from "../types";
//#endregion
//#region Images
import emptyTaskPriorityImg from "src/images/no-priority.svg";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
//#endregion

const TaskCardContent = ({
    containerRef, task, state,
    draggingTaskCard, 
    canEditing
}: TaskCardContentProps) => {
    const { name, responsible, deadline, priorityId, id } = task;
    const { socketIo, currentProjectTask } = useTaskBoardContext();
    const [className, setClassName] = useState<string>("");
    useEffect(() => {
        setClassName(getClassName());
    }, [state, id, currentProjectTask, canEditing, draggingTaskCard.data]);
    useEffect(() => {
        fillLocationCardWhenIsDragging();
    }, [draggingTaskCard.data]);
    const fillLocationCardWhenIsDragging = (): void => {
        if (!draggingTaskCard.data || !containerRef.current) return;
        const { top, left } = draggingTaskCard.data;
        containerRef.current.style.left = `${left}px`;
        containerRef.current.style.top = `${top}px`;
    };
    const getClassName = (): string => {
        const classList = ["task-card"];
        state === ProjectTaskState.Finalized && classList.push("finalized");
        // Verificando si el proyecto actual es el mismo que el de esta tarjeta
        id === currentProjectTask?.id && classList.push("open");
        !canEditing && classList.push("cannot-editing");
        draggingTaskCard.data && classList.push("dragging");
        return classList.join(" ");
    };
    const changeTaskStateToFinalized = (): void => {
        const projectTaskWithNewState: WSProjectTaskWithNewState = {
            taskId: id,
            state: ProjectTaskState.Finalized
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.ChangeTaskState, projectTaskWithNewState
        );
    }
    return (
        <Container
            ref={containerRef}
            className={className}
            width={draggingTaskCard.data?.width}
            {...draggingTaskCard.events}>
            <FlexFlow justify="space-between" gap="8px">
                <FlexFlow align="center" gap="10px">
                    <Check 
                        className="check-task-button" 
                        onClick={changeTaskStateToFinalized}>
                        <Icon className="checked" icon="material-symbols:check-circle"/>
                        <Icon className="unchecked" icon="gg:check-o"/>
                    </Check>
                    <TaskCardName>{name}</TaskCardName>
                </FlexFlow>
                {!canEditing && <LockedIcon><Icon icon="uil:padlock" /></LockedIcon>}
            </FlexFlow>
            <FlexFlow justify="space-between">
                <FlexFlow gap="12px" align="center">
                    {responsible ? (
                        <UserImage
                            name={responsible.name}
                            surname={responsible.surname}
                            urlPhoto={responsible.urlPhoto}
                            className="small"
                        />
                    ) : (
                        <img src={NoResponsible} />
                    )}
                    <DateText className={isDateBeforeToday(deadline) ? "late" : ""}>
                        {deadline !== -1 && dayMonthFormat(deadline)}
                    </DateText>
                </FlexFlow>
                {priorityId ? (
                    <TaskPriorityImage
                        path={TASK_PRIORITY[priorityId]}
                        isDynamic={false}
                        className="big"/>
                ) : (
                    <EmptyTaskPriority src={emptyTaskPriorityImg} />
                )}
            </FlexFlow>
        </Container>
    );
};

export default TaskCardContent;