import { FormProjectHook } from "src/views/ProjectManager/types";

export type FormSectionProps = {
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void
};
