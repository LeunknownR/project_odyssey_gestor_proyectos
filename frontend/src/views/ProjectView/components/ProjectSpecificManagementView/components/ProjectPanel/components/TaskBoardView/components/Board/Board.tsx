import { FlexFlow } from "src/components/styles";
import { BoardProps } from "./types";
import { ProjectState } from "src/entities/project/enums";
import StatusSection from "../StatusSection/StatusSection";

const Board = ({ projectTaskBoard, openTaskMenu }: BoardProps) => {
    const statusSectionProps = [
        {
            sectionName: "Pendientes",
            status: ProjectState.Pending,
            taskListInfo: projectTaskBoard.pending,
        },
        {
            sectionName: "En Curso",
            status: ProjectState.OnProgress,
            taskListInfo: projectTaskBoard.onProgress,
        },
        {
            sectionName: "Finalizadas",
            status: ProjectState.Finalized,
            taskListInfo: projectTaskBoard.finalized,
        },
    ];
    return (
        <FlexFlow width="100%" gap="15px">
            {statusSectionProps.map((section, idx) => (
                <StatusSection
                    key={idx}
                    sectionName={section.sectionName}
                    status={section.status}
                    taskListInfo={section.taskListInfo}
                    openTaskMenu={openTaskMenu}
                />
            ))}
        </FlexFlow>
    );
};

export default Board;
