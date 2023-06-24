//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
//#endregion
//#region Types
import { Container } from "./styles";
import { SubtaskTextField } from "../Subtask/styles";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { CreationSubtaskProps } from "./types";
import { Check } from "../../styles";
//#endregion

const CreationSubtask = ({ taskId, hideCreateSubtask }: CreationSubtaskProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [newSubtaskText, setNewSubtaskText] = useState<string>("");
    const { socketIo } = useTaskBoardContext();
    const containerRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.querySelector("input")?.focus();
    }, [containerRef.current]);
    const changeNewSubtaskName = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setNewSubtaskText(value);
    };
    const createTask = (): void => {
        if (!socketIo) return;
        const newSubtask: any = {
            taskId: taskId,
            name: newSubtaskText,
        };
        socketIo.emit(
            WSProjectTaskServiceEvents.Collaborator.CreateSubtask,
            newSubtask
        );
        hideCreateSubtask();
    };
    const isValidTaskName = (): boolean => {
        return newSubtaskText.trim().length > 0;
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (isValidTaskName()) 
                createTask();
            return;
        }
        if (!isValidTaskName() && e.key === "Backspace") 
            hideCreateSubtask();
    };
    const onBlur = () => {
        if (isValidTaskName()) {
            createTask();
            return;
        }
        hideCreateSubtask();
    };
    return (
        <Container
            className={isChecked ? "checked" : ""}
            justify="space-between"
            align="center"
            padding="8px 15px"
            ref={containerRef}
            tabIndex={0}
        >
            <FlexFlow gap="10px" align="center" width="90%">
                <Check 
                    icon={isChecked ? "material-symbols:check-circle" : "gg:check-o"}  
                    onClick={() => setIsChecked(prev => !prev)}/>
                <SubtaskTextField
                    value={newSubtaskText}
                    onChange={changeNewSubtaskName}
                    maxLength={50}
                    onBlur={onBlur}
                    onKeyDown={onKeyDownHandler}
                />
            </FlexFlow>
        </Container>
    );
};

export default CreationSubtask;
