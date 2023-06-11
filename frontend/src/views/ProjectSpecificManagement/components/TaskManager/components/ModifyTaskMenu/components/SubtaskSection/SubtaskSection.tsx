import SubtaskList from "../SubtaskList/SubtaskList";
import { AddSubtaskButton } from "./styles";
import { SubtaskSectionProps } from "./types";

const SubtaskSection = ({ currentProjectTask }: SubtaskSectionProps) => {
    return (
        <>
        {currentProjectTask.subtasks.length > 0 && (
            <SubtaskList currentProjectTask={currentProjectTask} />
        )}
        <AddSubtaskButton
            content="Agregar subtarea"
            icon="material-symbols:add-circle"
            onClick={() => console.log("GNOMO Subtask")}
        />
        </>
    );
};

export default SubtaskSection;
