import { PreloaderHook } from "src/components/Preloader/types";
import { DBProjectRoles } from "src/config/roles";

export type PanelTabProps = {
    preloader: PreloaderHook;
    projectId: number;
    projectRoleId: DBProjectRoles;
};
export type ProjectPanelSubmodule = {
    key: string;
    path: string;
    View: (props: PanelTabProps) => JSX.Element | null;
};