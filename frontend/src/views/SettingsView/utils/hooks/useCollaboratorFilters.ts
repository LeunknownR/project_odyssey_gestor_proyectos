import { useState } from "react";
import { CollaboratorFiltersHook } from "./types";
import { CollaboratorFilters } from "../../types";
import { INITIAL_COLLABORATOR_FILTERS } from "../constants";

const useCollaboratorFilters = (): CollaboratorFiltersHook => {
    const [filters, setFilters] = useState<CollaboratorFilters>({
        ...INITIAL_COLLABORATOR_FILTERS,
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
