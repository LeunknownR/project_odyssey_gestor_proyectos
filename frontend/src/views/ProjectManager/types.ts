export type ProjectForStateForm = {
    id: number,
    name: string,
    description: string,
    startDate: number,
    endDate: number,
    leaderId: number,
    [key: string]: any
}
export type FormProjectHook = {
    value: ProjectForStateForm;
    isCompleted: () => boolean;
    haveChanges: () => boolean;
    change: (field: string, value: any) => void;
}
export type ProjectFilters = {
    searchedProject: string;
    [key: string]: string;
};
