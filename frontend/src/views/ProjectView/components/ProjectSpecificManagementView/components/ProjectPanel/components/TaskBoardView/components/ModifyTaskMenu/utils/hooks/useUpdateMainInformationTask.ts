import { useState, useEffect } from "react";
import { ProjectTaskForm } from "../../types";
import { TaskUpdateType } from "../enums";
import { WSProjectTaskMainInformation } from "src/services/websockets/services/projectTasks/utils/entities";
import { Socket } from "socket.io-client";
import { UpdateMainInformationTaskHook } from "./types";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const useUpdateMainInformationTask = (form: ProjectTaskForm, socketIo: Socket | null): UpdateMainInformationTaskHook => {
    const {  
        id, name,
        description, responsibleId, 
        deadline, priorityId 
    } = form;
    const [taskUpdateType, setTaskUpdateType] = useState<TaskUpdateType | null>(null);
    const [timeoutToTaskUpdateId, setTimeoutToTaskUpdateId] = useState<NodeJS.Timeout | undefined>(); 
    useEffect(() => {
        if (!taskUpdateType) return;
        checkUpdateType();
    }, [taskUpdateType]);
    const getUpdateTaskMainInfo = (): WSProjectTaskMainInformation => { 
        return {
            taskId: id || 0,
            responsibleId: responsibleId || null,
            name, description,
            deadline, priorityId
        };
    }
    const updateTaskMainInfo = (): void => {
        const data: WSProjectTaskMainInformation = getUpdateTaskMainInfo();
        socketIo?.emit(WSProjectTaskServiceEvents.Collaborator.UpdateTaskMainInfo, data);
    }
    const checkUpdateType = async (): Promise<void> => {
        if (!taskUpdateType || !socketIo) return;
        switch (taskUpdateType) {
            case TaskUpdateType.WithTimeout:
                clearTimeout(timeoutToTaskUpdateId);
                const newTimeoutToTaskUpdateId: NodeJS.Timeout = setTimeout(() => {
                    updateTaskMainInfo();
                }, 350);
                setTimeoutToTaskUpdateId(newTimeoutToTaskUpdateId);
                break;
            case TaskUpdateType.Immediate:
                updateTaskMainInfo();
                break;
        }
        setTaskUpdateType(null);
    }
    const changeTaskUpdateType = (taskUpdateType: TaskUpdateType) => {
        setTaskUpdateType(taskUpdateType);
    }
    return changeTaskUpdateType;
    // return {
    //     changeTaskUpdateType,
    //     taskUpdateType
    // };
}

export default useUpdateMainInformationTask;