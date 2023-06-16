//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
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
    const { name, checked } = subtask;
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const { socketIo } = useTaskBoardContext();
    //GNOMO TEST
    const [subtaskText, setSubtaskText] = useState<string>(name);
    const getClassName = (): string => {
        const classList = [];
        isChecked && classList.push("checked");
        return classList.join(" ");
    };
    const deleteTask = () => {
        if (!socketIo) return;
        socketIo.emit(
            WSProjectTaskServiceEvents.Collaborator.DeleteSubtask,
            subtask.id
        );
    }
    return (
        <Container className={getClassName()} justify="space-between" align="center" padding="8px 15px">
            <FlexFlow gap="12px" align="center">
                <Check className={getClassName()} onClick={() => setIsChecked(prev => !prev)}>
                    <Icon icon={isChecked ? "material-symbols:check-circle" : "gg:check-o"} />
                </Check>
                <SubtaskTextField 
                    value={subtaskText}
                    onChange={() => {
                        // GNOMO termina pe ctmre el actualizar subtarea
                        console.log("ESCRIBIENDO");
                    }}/>
            </FlexFlow>
            <Skull onClick={deleteTask}>
                <Icon icon="ion:skull" />
            </Skull>
        </Container>
    );
};

export default Subtask;
