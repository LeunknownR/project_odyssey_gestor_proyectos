import { forwardRef } from "react";
import { Container, DateText, EmptyTaskPriority, TaskCardName, TaskPriorityImage } from "../../styles";
import { TaskCardContentProps } from "../../types";
import { ProjectState } from "src/entities/project/enums";
import emptyTaskPriorityImg from "src/images/no-priority.svg";
import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
import { TASK_PRIORITY } from "../../utils/constants";
import { dayMonthFormat, isDateBeforeToday } from "src/utils/dates";

const TaskCardContent = forwardRef<HTMLLIElement, TaskCardContentProps>(({
    taskInfo, openTaskMenu,
    state, draggingTaskCard: {
        dataDraggingCard,
        isDragging,
        events
    }
}, ref) => {
    const { name, responsible, deadline, priorityId } = taskInfo;
    const isFinalized: boolean = state === ProjectState.Finalized;
    const getClassName = (): string => {
        const classList = [];
        isFinalized && classList.push("checked");
        dataDraggingCard && classList.push("dragged");
        return classList.join(" ");
    };
    return (
        <Container
            ref={ref}
            className={getClassName()}
            width={dataDraggingCard?.width}
            top={dataDraggingCard?.top}
            left={dataDraggingCard?.left}
            {...events}
            onClick={() => !isDragging && openTaskMenu(taskInfo, state)}>
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
});

export default TaskCardContent;