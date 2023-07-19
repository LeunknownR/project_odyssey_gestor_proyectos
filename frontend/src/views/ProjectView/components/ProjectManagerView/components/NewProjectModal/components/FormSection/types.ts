import { FormProjectHook } from "src/views/ProjectView/components/ProjectManagerView/types";

export type FormSectionProps = {
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void
};
