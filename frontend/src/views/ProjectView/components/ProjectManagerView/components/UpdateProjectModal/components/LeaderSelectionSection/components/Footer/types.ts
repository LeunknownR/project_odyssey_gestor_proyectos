import { FormProjectHook } from "src/views/ProjectView/components/ProjectManagerView/types";

export type FooterProps = {
    updateProject: () => Promise<void>;
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void;
};
