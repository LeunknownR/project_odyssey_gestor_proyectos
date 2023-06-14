import { FlexFlow } from "src/components/styles";
import { DeleteSelectedDataField, Label } from "../../styles";
import { useEffect, useState } from "react";
import emptyTaskPriority from "src/images/no-priority.svg";
import { PriorityFieldProps } from "./types";
import {
    ListWrapper,
    PriorityImage,
    PriorityList,
    PrioritySelector,
    SelectedPriorityWrapper,
} from "./styles";
import { requestGetTaskPriority } from "src/services/projectTasks/aboutProjectTasks";
import { ProjectTaskPriority } from "src/entities/projectTasks/entities";
import { TASK_PRIORITY } from "../../../../../StatusSection/components/TaskList/components/TaskCard/utils/constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TaskPriorityImage } from "../../../../../StatusSection/components/TaskList/components/TaskCard/styles";

const PriorityField = ({ form }: PriorityFieldProps) => {
    const [isListOpened, setIsListOpened] = useState<boolean>(false);
    const [taskPriorityList, setTaskPriorityList] = useState<
        ProjectTaskPriority[]
    >([]);
    const { priorityId } = form.value;
    useEffect(() => {
        fillTaskPriorities();
    }, []);
    const fillTaskPriorities = async (): Promise<void> => {
        const { data } = await requestGetTaskPriority();
        if (data === null) return;
        setTaskPriorityList(data);
    };
    const toggleShowList = () => setIsListOpened(prev => !prev);
    const changeTaskPriorityField = (priorityId: number): void => {
        form.change("priorityId", priorityId);
    };
    return (
        <FlexFlow gap="45px">
            <Label>Prioridad</Label>
            <FlexFlow
                direction="column"
                gap="10px"
                tabIndex={0}
                onBlur={() => setIsListOpened(false)}
            >
                {!priorityId ? (
                    <PriorityImage
                        src={emptyTaskPriority}
                        onClick={toggleShowList}
                    ></PriorityImage>
                ) : (
                    <FlexFlow align="center" gap="10px">
                        <SelectedPriorityWrapper onClick={toggleShowList}>
                            <TaskPriorityImage
                                path={TASK_PRIORITY[priorityId]}
                                isDynamic={false}
                            />
                        </SelectedPriorityWrapper>
                        <DeleteSelectedDataField
                            onClick={() => changeTaskPriorityField(0)}
                        >
                            <Icon icon="material-symbols:close" />
                        </DeleteSelectedDataField>
                    </FlexFlow>
                )}
                <ListWrapper>
                    <PriorityList
                        direction="column"
                        className={isListOpened ? "show" : ""}
                    >
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
            </FlexFlow>
        </FlexFlow>
    );
};

export default PriorityField;
