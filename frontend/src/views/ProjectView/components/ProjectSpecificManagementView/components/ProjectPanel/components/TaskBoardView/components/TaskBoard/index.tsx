import { FlexFlow } from "src/components/styles";
import { TaskBoardProps } from "./types";
import TaskListOfState from "../TaskListOfState";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { TaskListOfStateProps } from "../TaskListOfState/types";

const TaskBoard = ({ taskBoard }: TaskBoardProps) => {
    const allTaskListOfStateProps: TaskListOfStateProps[] = [
        {
            sectionName: "Pendientes",
            state: ProjectTaskState.Pending,
            taskListInfo: taskBoard.pending,
        },
        {
            sectionName: "En Curso",
            state: ProjectTaskState.OnProgress,
            taskListInfo: taskBoard.onProgress,
        },
        {
            sectionName: "Finalizadas",
            state: ProjectTaskState.Finalized,
            taskListInfo: taskBoard.finalized,
        },
    ];
    return (
        <FlexFlow width="100%" gap="15px">
            {allTaskListOfStateProps.map((taskListOfState, idx) => (
                <TaskListOfState
                    key={idx}
                    {...taskListOfState}
                />
            ))}
        </FlexFlow>
    );
};

export default TaskBoard;
