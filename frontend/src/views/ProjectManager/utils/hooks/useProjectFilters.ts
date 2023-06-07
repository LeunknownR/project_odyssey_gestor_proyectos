import { useState } from "react";
import { ProjectFilters } from "../../types";
import { ProjectFiltersHook } from "./types";

const INITIAL_PROJECT_FILTERS: ProjectFilters = {
    searchedProject: "",
};

const useProjectFilters = (): ProjectFiltersHook => {
    const [filters, setFilters] = useState<ProjectFilters>({
        ...INITIAL_PROJECT_FILTERS,
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

export default useProjectFilters;
