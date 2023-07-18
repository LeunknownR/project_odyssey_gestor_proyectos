import { useRef, useState } from "react";
import { TaskBoardProps } from "./types";
import StateTaskList from "../StateTaskList";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { StateTaskListData } from "../StateTaskList/types";
import { Container, ScreenList } from "./styles";
import ChangeStateSectionButtons from "./components";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { STATE_OFFSET } from "./utils/constants";

const TaskBoard = ({ taskBoard }: TaskBoardProps) => {
    const [stateIdx, setStateIdx] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const { isMobile } = useMainContext();
    const wasDraggingTaskCardRef = useRef<boolean>(false);
    const allStateTaskListData: StateTaskListData[] = [
        {
            stateName: "Pendientes",
            state: ProjectTaskState.Pending,
            taskList: taskBoard.pending,
        },
        {
            stateName: "En Curso",
            state: ProjectTaskState.OnProgress,
            taskList: taskBoard.onProgress,
        },
        {
            stateName: "Finalizadas",
            state: ProjectTaskState.Finalized,
            taskList: taskBoard.finalized,
        },
    ];
    const prevStateSection = () => {
        setStateIdx(prev => prev - 1);
        setCurrentTranslateX(prev => prev + STATE_OFFSET);
    };
    const nextStateSection = () => {
        setStateIdx(prev => prev + 1);
        setCurrentTranslateX(prev => prev - STATE_OFFSET);
    };
    return (
        <Container direction="column">
            <ScreenList justify="center" currentTranslateX={currentTranslateX}>
                {allStateTaskListData.map(stateTaskListData => (
                    <StateTaskList
                        key={stateTaskListData.state}
                        data={stateTaskListData}
                        wasDraggingTaskCardRef={wasDraggingTaskCardRef}
                    />
                ))}
            </ScreenList>
            {isMobile && 
            <ChangeStateSectionButtons
                stateIdx={stateIdx}
                prevStateSection={prevStateSection}
                nextStateSection={nextStateSection}
            />}
        </Container>
    );
};

export default TaskBoard;
