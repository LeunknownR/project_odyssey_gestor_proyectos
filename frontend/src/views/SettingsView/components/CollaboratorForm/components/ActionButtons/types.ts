import { FormCollaboratorHandler } from "../../types";

export type ActionButtonsProps = {
    tabIdx: number;
    moveTab: (idx: number) => void;
    form: FormCollaboratorHandler;
}