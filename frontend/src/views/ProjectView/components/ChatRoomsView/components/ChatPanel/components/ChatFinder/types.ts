import { ChangeEvent } from "react";

export type ChatFinderProps = {
    searchChat: (e: ChangeEvent<HTMLInputElement>) => void;
    searchedChat: string;
}