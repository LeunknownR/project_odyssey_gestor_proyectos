export type EditTaskFormProps = {
    openModalDeleteTask: () => void;
}
export type ProjectTaskForm = {
    id?: number;
    responsibleId?: number | null;
    name: string;
    description: string | null;
    deadline: number;
    priorityId: number | null;
    [key: string]: any;
}