import { useState } from "react";
import { CollaboratorFiltersHook } from "./types";
import { CollaboratorFilters } from "../types";

const INITIAL_CUSTOMER_FILTERS: CollaboratorFilters = {
    searchedCollaborator: "",
};

const useCollaboratorFilters = (): CollaboratorFiltersHook => {
    const [filters, setFilters] = useState<CollaboratorFilters>({
        ...INITIAL_CUSTOMER_FILTERS,
    });
    const changeFilter = (filter: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filter]: value,
        }));
    };
    return {
        value: filters,
        change: changeFilter,
    };
};

export default useCollaboratorFilters;
