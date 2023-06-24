import { ProjectTaskState } from "src/entities/projectTasks/entities";
import StatePicker from "./StatePicker/StatePicker";
import { CloseButton, ProjectName, StateLabel, StateList, StyledModal } from "./styles";
import { ChangeStateModalProps, StateListDataProps } from "./types";

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
    const hideModal = (): void => modalProps.open(false); 
    return (
        <StyledModal {...modalProps}>
            <CloseButton icon="ion:close" onClick={hideModal} />
            <ProjectName>{name}</ProjectName>
            <StateLabel>Estado de la tarea</StateLabel>
            <StateList>
                {stateListData.map(stateData => <StatePicker {...stateData} taskId={id} hideModal={hideModal}/>)}
            </StateList>
        </StyledModal>
    );
};

export default ChangeStateModal;
