import { useRef } from "react";
import { FlexFlow } from "src/components/styles";
import { TaskBoardProps } from "./types";
import StateTaskList from "../StateTaskList";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { StateTaskListData } from "../StateTaskList/types";

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
        <FlexFlow width="100%" gap="15px">
            {allStateTaskListData.map(stateTaskListData => (
                <StateTaskList
                    key={stateTaskListData.state}
                    data={stateTaskListData}
                    wasDraggingTaskCardRef={wasDraggingTaskCardRef}/>
            ))}
        </FlexFlow>
    );
};

export default TaskBoard;
