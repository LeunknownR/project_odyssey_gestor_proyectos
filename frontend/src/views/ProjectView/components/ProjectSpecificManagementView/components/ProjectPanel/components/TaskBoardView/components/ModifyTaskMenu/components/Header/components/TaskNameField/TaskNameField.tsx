import { useState, useRef } from "react";
import { EditTaskNameInput, TaskName } from "./styles";
import { TaskUpdateType } from "../../../../utils/enums";
import { TaskNameFieldProps } from "./types";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const TaskNameField = ({ form, name, changeTaskUpdateType }: TaskNameFieldProps) => {
    //#region Refs
    const editingTaskNameInputRef = useRef<HTMLInputElement>(null);
    //#endregion
    //#region States
    const [editingTaskName, setEditingTaskName] = useState<string | null>(null);
    //#endregion
    const { isTaskResponsible } = useTaskBoardContext();
    //#region Functions
    const enableEditingTaskNameInput = (): void => {
        if (!isTaskResponsible) return;
        setEditingTaskName(name);
        setTimeout(() => editingTaskNameInputRef.current?.focus(), 200);
    };
    const changeEditTaskNameInput: React.ChangeEventHandler<
        HTMLInputElement
    > = ({ target: { value } }) => {
        if (value.length === 0) {
            editingTaskNameInputRef.current?.blur();
            return;
        }
        setEditingTaskName(value);
    };
    const checkEnterForUpdateName: React.KeyboardEventHandler<
        HTMLInputElement
    > = ({ key }) => {
        if (key !== "Enter" || !editingTaskName) return;
        editingTaskNameInputRef.current?.blur();
        form.change("name", editingTaskName);
        changeTaskUpdateType(TaskUpdateType.Immediate);
    };
    //#endregion
    return (
        <>
        {editingTaskName ? (
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
