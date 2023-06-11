import { FlexFlow } from "src/components/styles";
import StatusSection from "../StatusSection/StatusSection";
import { BoardProps } from "./types";

const Board = ({ projectTaskBoard, openTaskMenu }: BoardProps) => {
    const statusSectionProps = [
        {
            status: "Pendientes",
            taskListInfo: projectTaskBoard.pending,
        },
        {
            status: "En Curso",
            taskListInfo: projectTaskBoard.onProgress,
        },
        {
            status: "Finalizadas",
            taskListInfo: projectTaskBoard.finalized,
        },
    ];
    return (
        <FlexFlow width="100%" gap="15px">
            {statusSectionProps.map((section, idx) => (
                <StatusSection
                    key={idx}
                    status={section.status}
                    taskListInfo={section.taskListInfo}
                    openTaskMenu={openTaskMenu}
                />
            ))}
            {/* <StatusSection
                status="Pendientes"
                taskListInfo={projectTaskBoard.pending}
                setCurrentProjectTask={setCurrentProjectTask}
            />
            <StatusSection
                status="En Curso"
                taskListInfo={projectTaskBoard.onProgress}
            />
            <StatusSection
                status="Finalizadas"
                taskListInfo={projectTaskBoard.finalized}
            /> */}
        </FlexFlow>
    );
};

export default Board;
