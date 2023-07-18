import SubtaskList from "../SubtaskList/SubtaskList";
import { SubtaskSectionProps } from "./types";

const SubtaskSection = ({ currentProjectTask }: SubtaskSectionProps) => {
    return (
        <>
        {currentProjectTask.subtasks.length > 0 && (
            <SubtaskList 
                currentProjectTask={currentProjectTask}
                scrollToMenuBottom={() => {}} />
        )}
        </>
    );
};

export default SubtaskSection;
