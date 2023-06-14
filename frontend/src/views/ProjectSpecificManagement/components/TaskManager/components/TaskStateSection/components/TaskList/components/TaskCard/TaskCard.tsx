import { FlexFlow } from "src/components/styles";
import {
    Container,
    DateText,
    Empty,
    StateSwordTag,
    TaskCardName,
    UnselectedResponsible,
} from "./styles";
import UserImage from "src/views/components/UserImage/UserImage";
import NoResponsible from "src/images/no-responsible.svg";
import { EventHandler, useEffect, useRef, useState } from "react";
import { TaskCardProps } from "./types";
import TaskPriorityNullImage from "src/images/test2.svg";
import { ProjectState } from "src/entities/project/enums";
import BackendImage from "src/views/components/UserImage/components/BackendImage/BackendImage";
import { TASK_PRIORITY } from "./utils/constants";
import useClassName from "src/utils/hooks/useClassName";

type Position = {
    x: number;
    y: number;
}
type DraggedPosition = {
    start: Position;
    value: Position;
};
const INIT_DRAGGED_POSITION: DraggedPosition = {
    start: {
        x: 0, y: 0
    },
    value: {
        x: 0, y: 0
    }
};

const TaskCard = ({ taskInfo, openTaskMenu, status }: TaskCardProps) => {
    const { name, responsible, deadline, priorityId } = taskInfo;
    const taskCardRef = useRef<HTMLLIElement>(null);
    const className = useClassName();
    const [isDragged, setIsDragged] = useState<boolean>(false);
    const [draggedPosition, setDraggedPosition] = useState<DraggedPosition>(INIT_DRAGGED_POSITION);
    useEffect(() => {
        status === ProjectState.Finalized && className.add("checked");
    }, []);
    useEffect(() => {
        if (isDragged) {
            className.add("dragged");
            return;
        }
        className.remove("dragged");
    }, [isDragged]);
    const onDragStart: React.DragEventHandler<HTMLElement> = e => {
        e.preventDefault();
        const startPosition: Position = {
            x: e.clientX,
            y: e.clientX
        };
        setDraggedPosition({
            start: startPosition,
            value: { ...startPosition }
        });
        setIsDragged(true);
    }
    const onDragEnd: React.DragEventHandler<HTMLElement> = e => {
        setDraggedPosition(INIT_DRAGGED_POSITION);
        setIsDragged(false);
    }
    const onDragOver = e => {

    }
    const renderEmpty = (): React.ReactElement | null => {
        if (!isDragged || !taskCardRef.current) 
            return null;
        return (
            <Empty height={`${taskCardRef.current.clientHeight}px`}/>
        );
    }
    
    return (
        <>
        {/* {renderEmpty()} */}
        <Container
            ref={taskCardRef}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
            className={className.value}
            onClick={() => openTaskMenu(taskInfo)}>
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
        </>
    );
};

export default TaskCard;
