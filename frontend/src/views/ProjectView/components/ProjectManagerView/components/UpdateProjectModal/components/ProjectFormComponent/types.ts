import { FormProjectHook } from "../../../../types";

export type ProjectFormComponentProps = {
    form: FormProjectHook;
    tabIdx: number;
    toPage: (idx: number) => void
};
