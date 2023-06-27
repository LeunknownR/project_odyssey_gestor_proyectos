import { PreloaderHook } from "src/components/Preloader/types"
import { DBProjectRoles } from "src/config/roles";

export type TaskBoardViewProps = {
    preloader: PreloaderHook;
    projectId: number;
    projectRoleId: DBProjectRoles;
};