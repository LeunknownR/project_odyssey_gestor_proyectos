import { forwardRef } from "react";
import { 
    Container, DateText, 
    EmptyTaskPriority, TaskCardName, 
    TaskPriorityImage, UnselectedResponsible 
} from "../styles";
import { TaskCardContentProps } from "../types";
import emptyTaskPriorityImg from "src/images/no-priority.svg";
import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
import { TASK_PRIORITY } from "../utils/constants";
import { dayMonthFormat } from "src/utils/dates";
import useTaskBoardContext from "../../../../../../../utils/contexts/useTaskBoardContext";
import { ProjectTaskState } from "src/entities/projectTasks/entities";

const TaskCardContent = forwardRef<HTMLLIElement, TaskCardContentProps>(({
    taskInfo, state, draggingTaskCard
}, ref) => {
    const { name, responsible, deadline, priorityId } = taskInfo;
    const { fillCurrentProjectTask } = useTaskBoardContext();
    const isFinalized: boolean = state === ProjectTaskState.Finalized;
    const getClassName = (): string => {
        const classList = ["task-card"];
        isFinalized && classList.push("checked");
        draggingTaskCard.isDragging() && classList.push("dragged");
        return classList.join(" ");
    };
    return (
        <Container
            ref={ref}
            className={getClassName()}
            width={draggingTaskCard.data?.width}
            top={draggingTaskCard.data?.top}
            left={draggingTaskCard.data?.left}
            {...draggingTaskCard.events}
            onClick={() => !draggingTaskCard.isDragging() && fillCurrentProjectTask(taskInfo, state)}>
            <FlexFlow align="center" gap="10px">
                <TaskCardName>{name}</TaskCardName>
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
                        <UnselectedResponsible src={NoResponsible} />
                    )}
                    <DateText>{deadline !== -1 && dayMonthFormat(deadline)}</DateText>
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
});

export default TaskCardContent;