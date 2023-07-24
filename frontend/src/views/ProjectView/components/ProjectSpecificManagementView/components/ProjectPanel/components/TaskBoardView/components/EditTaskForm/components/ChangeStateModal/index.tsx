import { useState } from "react";
import { ProjectTaskState } from "src/entities/projectTask/entities";
import StatePicker from "./StatePicker/StatePicker";
import { CloseButton, ProjectName, StateLabel, StateList, StyledModal } from "./styles";
import { ChangeStateModalProps, StateListDataProps } from "./types";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const stateListData: StateListDataProps[] = [
    {
        stateName: "Pendiente",
        state: ProjectTaskState.Pending,
    },
    {
        stateName: "En curso",
        state: ProjectTaskState.OnProgress,
    },
    {
        stateName: "Finalizado",
        state: ProjectTaskState.Finalized,
    }
]
const ChangeStateModal = ({ modalProps, name, id }: ChangeStateModalProps) => {
    const { socketIo, currentProjectTaskState } = useTaskBoardContext();
    const [newState, setNewState] = useState<ProjectTaskState | null>(currentProjectTaskState);
    const hideModal = (): void => modalProps.open(false); 
    const changeTaskState = (newState: ProjectTaskState): void => {
        const projectTaskWithNewState: WSProjectTaskWithNewState = {
            taskId: id,
            state: newState
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.ChangeTaskState,
            projectTaskWithNewState
        );
        setNewState(newState);
        hideModal();
    };
    return (
        <StyledModal {...modalProps}>
            <CloseButton icon="ion:close" onClick={hideModal} />
            <ProjectName>{name}</ProjectName>
            <StateLabel>Estado de la tarea</StateLabel>
            <StateList>
                {stateListData.map(stateData => (
                    <StatePicker 
                        key={stateData.state}
                        data={stateData}
                        newState={newState}
                        changeTaskState={changeTaskState}/>
                ))}
            </StateList>
        </StyledModal>
    );
};

export default ChangeStateModal;
