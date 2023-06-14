import { useState } from "react";
import { ProjectFinderProps } from "./types";
import CustomTextField from "src/components/CustomTextField/CustomTextField";

const ProjectFinder = ({ 
    filters, doFillProjects 
}: ProjectFinderProps) => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    const changeSearchedProject = (value: string) => {
        filters.change("searchedProject", value);
    }
    const changeSearchUser = (value: string) => {
        changeSearchedProject(value);
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            doFillProjects();
        }, 500);
        setTimeoutId(newTimeoutId);
    };
    return (
        <CustomTextField
            placeholder="Busca los proyectos por su nombre..."
            value={filters.value.searchedProject}
            onChange={e => changeSearchUser(e.target.value)}
            variant="header-search"
        />
    );
};

export default ProjectFinder;
