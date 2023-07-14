import { FormProjectHook } from "../../../../types";

export type FormSectionProps = {
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void
};
