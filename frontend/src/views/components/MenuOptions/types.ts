import { Project } from "src/entities/project/types";

export type MenuOptionsProps = {
    menuPosition?: string;
    onClickEdit: () => void;
    onClickDelete: () => void;
    onClickDetails: (project: Project) => void;
}