import { useState, useRef } from "react";
import { Container, DeleteButton, EditTaskNameInput, TaskName } from "./styles";
import { HeaderProps } from "./types";
import { TaskUpdateType } from "../../utils/enums";

const Header = ({
    form, name, 
    changeTaskUpdateType,
    openModalDeleteTask
}: HeaderProps) => {
    //#region Refs
    const editingTaskNameInputRef = useRef<HTMLInputElement>(null);
    //#endregion
    //#region States
    const [editingTaskName, setEditingTaskName] = useState<string | null>(null);
    //#endregion
    //#region Functions

    const enableEditingTaskNameInput = (): void => {
        setEditingTaskName(name);
        setTimeout(() => editingTaskNameInputRef.current?.focus(), 200);
    }
    const changeEditTaskNameInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
        if (value.length === 0) {
            editingTaskNameInputRef.current?.blur();
            return;
        }
        setEditingTaskName(value);
    }
    const checkEnterForUpdateName: React.KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
        if (key !== "Enter" || !editingTaskName) return;
        editingTaskNameInputRef.current?.blur();
        form.change("name", editingTaskName);
        changeTaskUpdateType(TaskUpdateType.Immediate);
    };
    //#endregion
    return (
        <Container justify="space-between" align="center" gap="15px">
            {editingTaskName ?
            <EditTaskNameInput
                ref={editingTaskNameInputRef}
                value={editingTaskName}
                onBlur={() => setEditingTaskName(null)}
                onKeyDown={checkEnterForUpdateName}
                onChange={changeEditTaskNameInput}/>
            : <TaskName onDoubleClick={enableEditingTaskNameInput}>
                {name}
            </TaskName>}
            <DeleteButton 
                icon="ion:skull" 
                onClick={openModalDeleteTask}/>
        </Container>
    );
};

export default Header;
