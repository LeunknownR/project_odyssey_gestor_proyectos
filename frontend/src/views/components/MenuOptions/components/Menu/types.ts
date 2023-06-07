import { Project } from "src/entities/project/types";

export type MenuProps = {
    show: boolean;
    menuPosition: string;
    onClickEdit: () => void;
    onClickDelete: () => void;
    onClickDetails: (project: Project) => void;
};
