import { ReactNode } from "react";

export type ChatPreviewProps = {
    portrait: ReactNode;
    title: string;
    datetime: number | null;
    message: string | null;
    onClick: () => void;
    active: boolean;
}