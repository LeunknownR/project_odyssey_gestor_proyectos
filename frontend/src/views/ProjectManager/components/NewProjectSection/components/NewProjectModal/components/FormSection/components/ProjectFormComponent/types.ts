import { FormProjectHook } from "src/views/ProjectManager/types";

export type ProjectFormComponentProps = {
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void
};
