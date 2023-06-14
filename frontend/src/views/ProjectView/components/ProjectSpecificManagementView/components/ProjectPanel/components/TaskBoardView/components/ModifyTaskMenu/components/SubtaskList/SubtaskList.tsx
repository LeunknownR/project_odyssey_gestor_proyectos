import { FlexFlow } from "src/components/styles";
import { Label } from "../TaskForm/styles";
import Subtask from "./Subtask/Subtask";
import { List } from "./styles";
import { SubtaskListProps } from "./types";

const SubtaskList = ({ currentProjectTask }: SubtaskListProps) => {
    const { subtasks } = currentProjectTask;
    return (
        <FlexFlow direction="column" margin="0 30px 0 0">
            <Label>Subtareas</Label>
            <List>
                {subtasks.map(subtask => (
                    <Subtask key={subtask.id} subtask={subtask} />
                ))}
            </List>
        </FlexFlow>
    );
};

export default SubtaskList;
