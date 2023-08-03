import { EndedSessionModalProps } from "../../types";

export type EndedSessionModalHandler = {
    value: EndedSessionModalProps;
    open: (content: string) => void;
};