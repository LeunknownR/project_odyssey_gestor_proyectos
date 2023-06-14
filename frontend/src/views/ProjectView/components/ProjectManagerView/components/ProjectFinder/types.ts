import { ProjectFiltersHook } from "../../utils/hooks/types";

export type ProjectFinderProps = {
    filters: ProjectFiltersHook;
    doFillProjects: () => void;
};
