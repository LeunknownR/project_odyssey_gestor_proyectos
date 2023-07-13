import { ViewModule } from "./roles";
import { PreloaderHook } from "src/components/Preloader/types";

export type ModuleViewByUserRole = {
    [roleId: string]: ViewModule[];
};
export type ProjectSubmoduleViewProps = {
    preloader: PreloaderHook;
    projectId: number;
};
export type ProjectSubmoduleView = {
    key: string;
    path: string;
    View: (props: ProjectSubmoduleViewProps) => JSX.Element | null;
};