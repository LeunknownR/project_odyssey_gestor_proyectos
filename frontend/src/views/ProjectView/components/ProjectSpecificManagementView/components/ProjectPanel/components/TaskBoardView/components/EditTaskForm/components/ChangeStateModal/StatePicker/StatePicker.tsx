import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";
import { Container } from "./styles";
import { StatePickerProps } from "./types";
import useTaskBoardContext from "../../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const StatePicker = ({ stateName, state, taskId, hideModal }: StatePickerProps) => {
    const { socketIo } = useTaskBoardContext();
    const changeTaskState = (): void => {
        const projectTaskWithNewState: WSProjectTaskWithNewState = {
            taskId: taskId,
            state
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.ChangeTaskState, projectTaskWithNewState
        );
        hideModal();
    }
    return (
        <Container justify="center" width="100%" padding="10px 15px" onClick={changeTaskState}>
            <span>{stateName}</span>
        </Container>
    );
};

export default StatePicker;
