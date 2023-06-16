import { useState } from "react";
import { FlexFlow } from "src/components/styles";
import { Label } from "../TaskForm/styles";
import { List } from "./styles";
import { SubtaskListProps } from "./types";
import Subtask from "./components/Subtask/Subtask";
import CreationSubtask from "./components/CreationSubtask/CreationSubtask";
import { AddSubtaskButton } from "../SubtaskSection/styles";

const SubtaskList = ({ currentProjectTask }: SubtaskListProps) => {
    const [createTaskCard, setCreateTaskCard] = useState<boolean>(false);
    const { subtasks } = currentProjectTask;
    const hideCreateSubtask = (): void => setCreateTaskCard(false);
    return (
        <FlexFlow direction="column" margin="0 30px 0 0">
            {(subtasks.length > 0 || createTaskCard) && (
                <>
                <Label>Subtareas</Label>
                <List>
                    {subtasks.map(subtask => (
                        <Subtask key={subtask.id} subtask={subtask} />
                    ))}
                    {createTaskCard && (
                        <CreationSubtask
                            taskId={currentProjectTask.id}
                            hideCreateSubtask={hideCreateSubtask}
                        />
                    )}
                </List>
                </>
            )}
            <AddSubtaskButton
                content="Agregar subtarea"
                icon="material-symbols:add-circle"
                onClick={() => setCreateTaskCard(true)}
            />
        </FlexFlow>
    );
};

export default SubtaskList;
