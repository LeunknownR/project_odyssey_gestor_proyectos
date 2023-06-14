import { FlexFlow } from "src/components/styles";
import ProjectTaskStateSection from "../TaskStateSection/TaskStateSection";
import { BoardProps } from "./types";
import { ProjectState } from "src/entities/project/enums";
import { ProjectTaskState } from "src/entities/projectTasks/entities";

const Board = ({ projectTaskBoard, openTaskMenu }: BoardProps) => {
    const statusSectionProps = [
        {
            sectionName: "Pendientes",
            state: ProjectState.Pending,
            taskListInfo: projectTaskBoard.pending
        },
        {
            sectionName: "En Curso",
            state: ProjectState.OnProgress,
            taskListInfo: projectTaskBoard.onProgress
        },
        {
            sectionName: "Finalizadas",
            state: ProjectState.Finalized,
            taskListInfo: projectTaskBoard.finalized
        },
    ];
    const changeProjectTaskState = (taskId: number, taskState: ProjectTaskState): void => {
        // 
    }
    return (
        <FlexFlow width="100%" gap="15px">
            {statusSectionProps.map((section, idx) => (
                <ProjectTaskStateSection
                    key={idx}
                    sectionName={section.sectionName}
                    status={section.state}
                    taskListInfo={section.taskListInfo}
                    changeProjectTaskState={changeProjectTaskState}
                    openTaskMenu={openTaskMenu}
                />
            ))}
        </FlexFlow>
    );
};

export default Board;
