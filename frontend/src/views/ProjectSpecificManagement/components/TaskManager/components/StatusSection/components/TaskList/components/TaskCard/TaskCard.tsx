import { FlexFlow } from "src/components/styles";
import {
    Container,
    DateText,
    StateSwordTag,
    TaskCardName,
    UnselectedResponsible,
} from "./styles";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
import { useState, useEffect } from "react";
import { TaskCardProps } from "./types";
import TaskPriorityNullImage from "src/images/test2.svg";
import { ProjectState } from "src/entities/project/enums";
import BackendImage from "src/views/components/UserImage/components/BackendImage/BackendImage";
import { TASK_PRIORITY } from "./utils/constants";

const TaskCard = ({ taskInfo, openTaskMenu, status }: TaskCardProps) => {
    const { name, responsible, deadline, priorityId } = taskInfo;
    const [isFinalized, setIsFinalized] = useState(false);
    useEffect(() => setIsFinalized(status === ProjectState.Finalized), []);
    const getClassName = () => {
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
                    <DateText>{deadline}</DateText>
                </FlexFlow>
                {priorityId ? (
                    <BackendImage
                        path={TASK_PRIORITY[priorityId]}
                        isDynamic={false}
                        className="big"
                    />
                ) : (
                    <StateSwordTag src={TaskPriorityNullImage} />
                )}
            </FlexFlow>
        </Container>
    );
};

export default TaskCard;
