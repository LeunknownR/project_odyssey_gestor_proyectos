export type EditTaskFormProps = {
    openModalDeleteTask: () => void;
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
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