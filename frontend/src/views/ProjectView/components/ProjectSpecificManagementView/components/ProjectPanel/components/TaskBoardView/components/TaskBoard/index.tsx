import { useRef } from "react";
import { TaskBoardProps } from "./types";
import StateTaskList from "../StateTaskList";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { StateTaskListData } from "../StateTaskList/types";
import { Container } from "./styles";

const TaskBoard = ({ taskBoard }: TaskBoardProps) => {
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
    return (
        <Container>
            {allStateTaskListData.map(stateTaskListData => (
                <StateTaskList
                    key={stateTaskListData.state}
                    data={stateTaskListData}
                    wasDraggingTaskCardRef={wasDraggingTaskCardRef}/>
            ))}
        </Container>
    );
};

export default TaskBoard;
