import { useEffect, useState } from "react";
import { INITIAL_FORM } from "../constants";
import { ModalProps } from "src/components/Modal/types";
import { Project, ProjectForm } from "src/entities/project/types";
import { ProjectForStateForm } from "../../types";
import { FormProjectHook } from "./types";

const useFormProject = (
    modalPropsCreate: ModalProps,
    modalPropsUpdate: ModalProps,
    currentProject: Project | null
): FormProjectHook => {
    const [form, setForm] = useState<ProjectForStateForm>({ ...INITIAL_FORM });
    useEffect(() => {
        initForm();
    }, [modalPropsCreate.isOpen, modalPropsUpdate.isOpen]);
    const initForm = () => {
        if (!modalPropsCreate.isOpen && !modalPropsUpdate.isOpen) 
            return;
        if (!currentProject) {
            setForm(INITIAL_FORM);
            return;
        }
        setForm({
            id: currentProject.id,
            name: currentProject.name,
            description: currentProject.description,
            startDate: currentProject.startDate,
            endDate: currentProject.endDate,
            leaderId: currentProject.leader?.id || 0,
        });
    };
    const isCompletedForm = (): boolean => {
        const { name, description, startDate, endDate, leaderId } = form;
        return Boolean(
            name && description && startDate > -1 && endDate > -1 && leaderId
        );
    };
    const formHaveChanges = (): boolean => {
        if (!currentProject) return true;
        const { name, description, startDate, endDate, leaderId } = form;
        return (
            name !== currentProject.name ||
            description !== currentProject.description ||
            startDate !== currentProject.startDate ||
            endDate !== currentProject.endDate ||
            leaderId !== currentProject.leader?.id
        );
    };
    const changeField = (field: string, value: any) => {
        console.log(form)
        setForm(prev => ({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }));
    };
    const getProjectFromForm = (): ProjectForm | null => {
        const {
            name,
            description,
            startDate,
            endDate,
            leaderId,
        } = form;
        const project: ProjectForm = {
            id: currentProject?.id,
            name,
            description,
            startDate,
            endDate,
            leaderId: leaderId || 4
        };
        return project;
    };
    return {
        form: {
            value: form,
            isCompleted: isCompletedForm,
            haveChanges: formHaveChanges,
            change: changeField,
        },
        getProjectFromForm,
    };
};

export default useFormProject;
