//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent, useEffect, useState } from "react";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import { Check, Container, Skull, SubtaskTextField } from "./styles";
//#endregion
//#region Types
import { SubtaskProps } from "./types";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
//#endregion

const Subtask = ({ subtask }: SubtaskProps) => {
    //#region States
    const { socketIo } = useTaskBoardContext();
    const { name, checked, id } = subtask;
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const [subtaskText, setSubtaskText] = useState<string>(name);
    const [timeoutToTaskUpdateId, setTimeoutToTaskUpdateId] = useState<
        NodeJS.Timeout | undefined
    >();
    //#endregion
    //#region Effects
    useEffect(() => {
        updateSubtask();
    }, [subtaskText]);
    useEffect(() => {
        switchCheckStatus();
    }, [isChecked]);
    //#endregion
    //#region Functions
    const getClassName = (): string => {
        const classList = [];
        isChecked && classList.push("checked");
        return classList.join(" ");
    };
    const updateSubtask = (): void => {
        clearTimeout(timeoutToTaskUpdateId);
        const newTimeoutToTaskUpdateId: NodeJS.Timeout = setTimeout(() => {
            const subtaskToBeUpdated = {
                subtaskId: id,
                name: subtaskText,
            };
            socketIo?.emit(
                WSProjectTaskServiceEvents.Collaborator.UpdateSubtask,
                subtaskToBeUpdated
            );
        }, 350);
        setTimeoutToTaskUpdateId(newTimeoutToTaskUpdateId);
    };
    const deleteSubtask = (): void => {
        if (!socketIo) return;
        socketIo.emit(
            WSProjectTaskServiceEvents.Collaborator.DeleteSubtask,
            subtask.id
        );
    };
    const changeSubtaskName = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setSubtaskText(value);
    };
    const switchCheckStatus = () => {
        const subtaskToBeSwitchedCheckStatus = {
            subtaskId: id,
            checked: isChecked,
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.SwitchCheckStatusSubtask,
            subtaskToBeSwitchedCheckStatus
        );
    };
    //#endregion
    return (
        <Container
            className={getClassName()}
            justify="space-between"
            align="center"
            padding="8px 15px"
        >
            <FlexFlow gap="12px" align="center">
                <Check
                    className={getClassName()}
                    onClick={() => setIsChecked(prev => !prev)}
                >
                    <Icon icon={isChecked
                                ? "material-symbols:check-circle"
                                : "gg:check-o"}/>
                </Check>
                <SubtaskTextField
                    value={subtaskText}
                    onChange={changeSubtaskName}
                />
            </FlexFlow>
            <Skull onClick={deleteSubtask}>
                <Icon icon="ion:skull" />
            </Skull>
        </Container>
    );
};

export default Subtask;
