import { PaginatorHookType } from "src/components/Paginator/utils/types"

export type CollaboratorsPanelProps = {
    paginator: PaginatorHookType;
    doTriggerFillingRequest: () => void;
}