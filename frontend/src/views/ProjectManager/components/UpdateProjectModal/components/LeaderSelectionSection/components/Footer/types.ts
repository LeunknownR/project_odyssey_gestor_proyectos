import { FormProjectHook } from "src/views/ProjectManager/types";

export type FooterProps = {
    updateProject: () => Promise<void>;
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void;
};
