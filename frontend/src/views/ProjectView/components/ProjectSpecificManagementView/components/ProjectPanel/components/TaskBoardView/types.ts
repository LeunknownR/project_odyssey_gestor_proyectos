import { PreloaderHook } from "src/components/Preloader/types"

export type TaskBoardViewProps = {
    preloader: PreloaderHook;
    projectId: number;
    projectRoleId: string;
}