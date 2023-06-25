import { useState, useEffect } from "react";
import { ProjectTaskForm } from "../../types";
import { WSProjectTaskMainInformation } from "src/services/websockets/services/projectTasks/utils/entities";
import { Socket } from "socket.io-client";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const useUpdateMainInformationTask = (form: ProjectTaskForm, socketIo: Socket | null): (() => void) => {
    const {  
        id, name,
        description, responsibleId, 
        deadline, priorityId 
    } = form;
    const [triggerUpdateTask, setTriggerUpdateTask] = useState<boolean>(false);
    useEffect(() => {
        if (!triggerUpdateTask) return;
        updateTask();
        setTriggerUpdateTask(false);
    }, [triggerUpdateTask]);
    const getUpdateTaskMainInfo = (): WSProjectTaskMainInformation => { 
        return {
            taskId: id || 0,
            responsibleId: responsibleId || null,
            name, description,
            deadline, priorityId
        };
    }
    const updateTask = async (): Promise<void> => {
        if (!socketIo) return;
        const data: WSProjectTaskMainInformation = getUpdateTaskMainInfo();
        socketIo?.emit(WSProjectTaskServiceEvents.Collaborator.UpdateTaskMainInfo, data);
    }
    const doUpdateTask = (): void => {
        setTriggerUpdateTask(true);
    }
    return doUpdateTask;
}

export default useUpdateMainInformationTask;