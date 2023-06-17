import { FlexFlow } from "src/components/styles";
import { DeleteSelectedDataField, Label } from "../../styles";
import { useEffect, useState } from "react";
import emptyTaskPriority from "src/images/no-priority.svg";
import { PriorityFieldProps } from "./types";
import {
    Content,
    ListWrapper,
    EmptyTaskPriority,
    PriorityList,
    PrioritySelector
} from "./styles";
import { requestGetTaskPriority } from "src/services/projectTasks/aboutProjectTasks";
import { ProjectTaskPriority } from "src/entities/projectTasks/entities";
import { TASK_PRIORITY } from "../../../../../StatusSection/components/TaskList/components/TaskCard/utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TaskPriorityImage } from "../../../../../StatusSection/components/TaskList/components/TaskCard/styles";
import { TaskUpdateType } from "../../../../utils/enums";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";

const PriorityField = ({ 
    form, changeTaskUpdateType
}: PriorityFieldProps) => {
    const [isListOpened, setIsListOpened] = useState<boolean>(false);
    const [taskPriorityList, setTaskPriorityList] = useState<
        ProjectTaskPriority[]
    >([]);
    const { isTaskResponsible } = useTaskBoardContext();
    const { priorityId } = form.value;
    useEffect(() => {
        fillTaskPriorities();
    }, []);
    const fillTaskPriorities = async (): Promise<void> => {
        const { data } = await requestGetTaskPriority();
        if (data === null) return;
        setTaskPriorityList(data);
    };
    const changeTaskPriorityField = (priorityId: number | null): void => {
        form.change("priorityId", priorityId);
        setIsListOpened(false);
        changeTaskUpdateType(TaskUpdateType.Immediate);
    };
    return (
        <FlexFlow gap="45px" align="center">
            <Label>Prioridad</Label>
            <Content
                tabIndex={0}
                onBlur={() => setIsListOpened(false)}>
                {!priorityId ? (
                    <EmptyTaskPriority
                        className={!isTaskResponsible ? "disabled" : ""}
                        src={emptyTaskPriority}
                        onClick={() => setIsListOpened(true)}/>
                ) : (
                    <FlexFlow align="center" gap="10px">
                        <TaskPriorityImage
                            className={!isTaskResponsible ? "disabled" : ""}
                            path={TASK_PRIORITY[priorityId]}
                            isDynamic={false}
                            onClick={() => setIsListOpened(true)}
                        />
                        {isTaskResponsible && <DeleteSelectedDataField
                            onClick={() => changeTaskPriorityField(null)}>
                            <Icon icon="material-symbols:close" />
                        </DeleteSelectedDataField>}
                    </FlexFlow>
                )}
                <ListWrapper className={isListOpened ? "show" : ""}>
                    <PriorityList
                        direction="column">
                        {taskPriorityList.map(({ id, urlPhoto }) => (
                            <PrioritySelector
                                key={id}
                                onClick={() => changeTaskPriorityField(id)}
                            >
                                <TaskPriorityImage
                                    path={urlPhoto}
                                    isDynamic={false}
                                />
                            </PrioritySelector>
                        ))}
                    </PriorityList>
                </ListWrapper>
            </Content>
        </FlexFlow>
    );
};

export default PriorityField;
