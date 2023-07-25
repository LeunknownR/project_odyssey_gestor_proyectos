import { PaginatorHookType } from "src/components/Paginator/utils/types"
import { User } from "src/entities/user/types";

export type CollaboratorsPanelProps = {
    collaborators: User[];
    paginator: PaginatorHookType;
    doTriggerFillingRequest: () => void;
}