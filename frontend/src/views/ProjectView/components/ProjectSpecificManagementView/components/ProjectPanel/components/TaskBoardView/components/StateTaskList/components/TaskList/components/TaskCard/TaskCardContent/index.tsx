//#region Libraries
import { forwardRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import { 
    Container, DateText, 
    EmptyTaskPriority, TaskCardName, 
    TaskPriorityImage
} from "../styles";
import { Check } from "./styles";
//#endregion
//#region Utils
import { TASK_PRIORITY } from "../utils/constants";
import { dayMonthFormat, isDateBeforeToday } from "src/utils/dates";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
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

const TaskCardContent = forwardRef<HTMLLIElement, TaskCardContentProps>(({
    task, state, draggingTaskCard
}, ref) => {
    const { name, responsible, deadline, priorityId, id } = task;
    const { socketIo } = useTaskBoardContext();
    const isFinalized: boolean = state === ProjectTaskState.Finalized;
    const getClassName = (): string => {
        const classList = ["task-card"];
        isFinalized && classList.push("checked");
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
            ref={ref}
            className={getClassName()}
            width={draggingTaskCard.data?.width}
            top={draggingTaskCard.data?.top}
            left={draggingTaskCard.data?.left}
            {...draggingTaskCard.events}>
            <FlexFlow align="center" gap="10px">
                <Check onClick={changeTaskStateToFinalized}>
                    <Icon icon={isFinalized ? "material-symbols:check-circle" : "gg:check-o"}/>
                </Check>
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