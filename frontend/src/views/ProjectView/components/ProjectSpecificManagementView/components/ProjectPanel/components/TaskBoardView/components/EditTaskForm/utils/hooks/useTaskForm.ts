import { useEffect, useState } from "react";
import { INITIAL_FORM } from "../constants";
import { ProjectTaskForm } from "../../types";
import { ProjectTask } from "src/entities/projectTask/entities";
import { TaskFormHook } from "./types";

const useTaskForm = (
    currentProjectTask: ProjectTask | null,
    isTaskMenuOpen: boolean
): TaskFormHook => {
    const [form, setForm] = useState<ProjectTaskForm>({ ...INITIAL_FORM });
    useEffect(() => {
        if (isTaskMenuOpen) {
            initForm();
            return;
        }
        setForm({ ...INITIAL_FORM });
    }, [isTaskMenuOpen]);
    useEffect(() => {
        if (!isTaskMenuOpen) return;
        initForm();
    }, [currentProjectTask]);
    const initForm = () => {
        if (!currentProjectTask) return;
        setForm({
            id: currentProjectTask.id,
            responsibleId: currentProjectTask.responsible?.id || null,
            name: currentProjectTask.name,
            description: currentProjectTask.description,
            deadline: currentProjectTask.deadline,
            priorityId: currentProjectTask.priorityId
        });
    };
    const formHaveChanges = (): boolean => {
        if (!currentProjectTask) return true;
        const { name, responsibleId, description, deadline, priorityId } = form;
        return (
            responsibleId !== currentProjectTask.responsible?.id ||
            name !== currentProjectTask.name ||
            description !== currentProjectTask.description ||
            deadline !== currentProjectTask.deadline ||
            priorityId !== currentProjectTask.priorityId
        );
    };
    const changeField = (field: string, value: any) => {
        setForm(prev => ({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }));
    };
    const getProjectFromForm = (): ProjectTaskForm | null => {
        const { name, responsibleId, description, deadline, priorityId } = form;
        const project: ProjectTaskForm = {
            id: currentProjectTask?.id,
            name,
            description,
            responsibleId,
            deadline,
            priorityId,
        };
        return project;
    };
    return {
        form: {
            value: form,
            // isCompleted: isCompletedForm,
            haveChanges: formHaveChanges,
            change: changeField,
        },
        getProjectFromForm,
    };
};

export default useTaskForm;
