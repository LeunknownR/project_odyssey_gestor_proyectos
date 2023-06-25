import SubtaskList from "../SubtaskList/SubtaskList";
import { AddSubtaskButton } from "./styles";
import { SubtaskSectionProps } from "./types";

const SubtaskSection = ({ currentProjectTask }: SubtaskSectionProps) => {
    return (
        <>
        {currentProjectTask.subtasks.length > 0 && (
            <SubtaskList currentProjectTask={currentProjectTask} />
        )}
        </>
    );
};

export default SubtaskSection;
