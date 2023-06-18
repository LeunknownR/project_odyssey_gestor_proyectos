import { FlexFlow } from "src/components/styles";
import { TaskBoardProps } from "./types";
import StateTaskList from "../StateTaskList";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { StateTaskListProps } from "../StateTaskList/types";

const TaskBoard = ({ taskBoard }: TaskBoardProps) => {
    const allStateTaskList: StateTaskListProps[] = [
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
            {allStateTaskList.map((stateTaskList) => (
                <StateTaskList
                    key={stateTaskList.state}
                    {...stateTaskList}/>
            ))}
        </FlexFlow>
    );
};

export default TaskBoard;
