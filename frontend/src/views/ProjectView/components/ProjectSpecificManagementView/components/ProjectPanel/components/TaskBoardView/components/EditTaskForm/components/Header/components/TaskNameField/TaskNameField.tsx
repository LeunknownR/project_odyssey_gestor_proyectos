import { useState, useRef, useEffect } from "react";
import { EditTaskNameInput, TaskName } from "./styles";
import { TaskNameFieldProps } from "./types";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const TaskNameField = ({ form, name, doUpdateTask }: TaskNameFieldProps) => {
    //#region Refs
    const editingTaskNameInputRef = useRef<HTMLInputElement>(null);
    //#endregion
    //#region States
    const [editingTaskName, setEditingTaskName] = useState<string | null>(null);
    //#endregion
    const { isEditTaskFormOpen: isTaskMenuOpen, canEditTask } = useTaskBoardContext();
    useEffect(() => {
        if (isTaskMenuOpen) return;
        setEditingTaskName(null);
    }, [isTaskMenuOpen]);
    //#region Functions
    const enableEditingTaskNameInput = (): void => {
        if (!canEditTask) return;
        setEditingTaskName(name);
        setTimeout(() => editingTaskNameInputRef.current?.focus(), 200);
    };
    const changeEditTaskNameInput: React.ChangeEventHandler<
        HTMLInputElement
    > = ({ target: { value } }) => {
        setEditingTaskName(value);
    };
    const checkEnterForUpdateName: React.KeyboardEventHandler<
        HTMLInputElement
    > = ({ key }) => {
        if (key !== "Enter" || !editingTaskName) return;
        editingTaskNameInputRef.current?.blur();
        form.change("name", editingTaskName);
        doUpdateTask();
    };
    //#endregion
    return (
        <>
        {editingTaskName !== null ? (
            <EditTaskNameInput
                ref={editingTaskNameInputRef}
                value={editingTaskName}
                onBlur={() => setEditingTaskName(null)}
                onKeyDown={checkEnterForUpdateName}
                onChange={changeEditTaskNameInput}
                maxLength={50}
            />
        ) : (
            <TaskName onDoubleClick={enableEditingTaskNameInput}>
                {name}
            </TaskName>
        )}
        </>
    );
};

export default TaskNameField;
