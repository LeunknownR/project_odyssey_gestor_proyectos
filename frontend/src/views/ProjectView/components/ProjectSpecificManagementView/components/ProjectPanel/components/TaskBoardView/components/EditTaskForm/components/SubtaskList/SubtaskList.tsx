//#region Libraries
import { useRef, useState } from "react";
//#endregion
//#region Styles
import { Label } from "../TaskForm/styles";
import { Container, List } from "./styles";
import { AddSubtaskButton } from "../SubtaskSection/styles";
//#endregion
//#region Components
import Subtask from "./components/Subtask/Subtask";
import CreationSubtask from "./components/CreationSubtask/CreationSubtask";
//#endregion
//#region Types
import { SubtaskListProps } from "./types";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
//#endregion

const SubtaskList = ({ currentProjectTask, scrollToMenuBottom }: SubtaskListProps) => {
    const [createSubtaskCard, setCreateSubtaskCard] = useState<boolean>(false);
    const { subtasks } = currentProjectTask;
    const { canEditTask } = useTaskBoardContext();
    const hideCreateSubtask = (): void => setCreateSubtaskCard(false);
    const subtaskListRef = useRef<HTMLDivElement | null>(null)
    return (
        <Container direction="column" padding="0 20px 0 0" ref={subtaskListRef}>
            {(subtasks.length > 0 || createSubtaskCard) && (
                <>
                <Label>Subtareas</Label>
                <List>
                    {subtasks.map(subtask => (
                        <Subtask key={subtask.id} subtask={subtask} />
                    ))}
                    {createSubtaskCard && (
                        <CreationSubtask
                            taskId={currentProjectTask.id}
                            hideCreateSubtask={hideCreateSubtask}
                        />
                    )}
                </List>
                </>
            )}
            {canEditTask && <AddSubtaskButton
                content="Agregar subtarea"
                icon="material-symbols:add-circle"
                onClick={() => {
                    setCreateSubtaskCard(true); 
                    if (!subtaskListRef || !subtaskListRef.current) return;
                    scrollToMenuBottom(subtaskListRef.current.scrollHeight);
                }}
            />}
        </Container>
    );
};

export default SubtaskList;
