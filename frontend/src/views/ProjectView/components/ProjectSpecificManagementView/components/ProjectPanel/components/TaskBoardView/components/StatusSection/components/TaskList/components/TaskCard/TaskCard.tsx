import { useState, useEffect } from "react";
import { FlexFlow } from "src/components/styles";
import {
    Container,
    DateText,
    EmptyTaskPriority,
    TaskCardName,
    TaskPriorityImage,
    UnselectedResponsible,
} from "./styles";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
import { TaskCardProps } from "./types";
import emptyTaskPriorityImg from "src/images/no-priority.svg";
import { ProjectState } from "src/entities/project/enums";
import BackendImage from "src/views/components/UserImage/components/BackendImage/BackendImage";
import { TASK_PRIORITY } from "./utils/constants";
import { dayMonthFormat } from "src/utils/dates";

const TaskCard = ({ 
    taskInfo, 
    openTaskMenu, 
    state
}: TaskCardProps) => {
    const { name, responsible, deadline, priorityId } = taskInfo;
    const [isFinalized, setIsFinalized] = useState(false);
    useEffect(() => setIsFinalized(state === ProjectState.Finalized), []);
    const getClassName = (): string => {
        const classList = [];
        isFinalized && classList.push("checked");
        return classList.join(" ");
    };
    return (
        <Container
            className={getClassName()}
            onClick={() => openTaskMenu(taskInfo)}
        >
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
                        className="big"
                    />
                ) : (
                    <EmptyTaskPriority src={emptyTaskPriorityImg} />
                )}
            </FlexFlow>
        </Container>
    );
};

export default TaskCard;
