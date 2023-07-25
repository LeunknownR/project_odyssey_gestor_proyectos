import { useEffect, useState } from "react";
import { PreloaderHook } from "src/components/Preloader/types";
import { CollaboratorFilters } from "../../types";
import { PaginatorHookType } from "src/components/Paginator/utils/types";
import { CollaboratorsHook } from "./types";
import { User } from "src/entities/user/types";
import { RECORDS_BY_PAGE } from "src/components/Paginator/utils/constants";
import { requestGetCollaborators } from "src/services/collaboratorConfig/aboutCollaboratorConfig";

const useCollaborators = (
    preloader: PreloaderHook,
    filters: CollaboratorFilters,
    paginator: PaginatorHookType
): CollaboratorsHook => {
    const [collaborators, setCollaborators] = useState<User[]>([]);
    const [triggerRequest, setTriggerRequest] = useState(true);
    useEffect(() => {
        if (!triggerRequest) return;
        fillCustomers();
        setTriggerRequest(false);
    }, [triggerRequest]);
    const fillCustomers = async () => {
        preloader.show(null);
        const { data } = await requestGetCollaborators({
            searchedCollaborator: filters.searchedCollaborator,
            page: paginator.data.currentPage,
        });
        preloader.hide();
        if (data === null) return;
        const { list, count } = data;
        paginator.setQuantityPages(
            Math.ceil(count / RECORDS_BY_PAGE),
            count
        );
        if (count <= RECORDS_BY_PAGE) paginator.movePage(1);
        setCollaborators(list);
    };
    const doFill = () => {
        setTriggerRequest(true);
    };
    return {
        value: collaborators,
        fill: fillCustomers,
        doFill,
    };
};

export default useCollaborators;
