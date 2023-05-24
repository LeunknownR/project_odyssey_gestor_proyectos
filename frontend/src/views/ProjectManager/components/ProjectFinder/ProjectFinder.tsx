import { useState } from "react";
import CustomTextFieldSearch from "src/components/CustomTextFieldSearch/CustomTextFieldSearch";
import { ProjectFinderProps } from "./types";

const ProjectFinder = ({ changeSearchedProject, doTriggerFillingRequest }: ProjectFinderProps) => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    const changeSearchUser = (value: string) => {
        changeSearchedProject(value);
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            doTriggerFillingRequest();
        }, 500);
        setTimeoutId(newTimeoutId);
    };
    return (
        <CustomTextFieldSearch
            variant="header-search"
            changeField={changeSearchUser}
        />
    );
};

export default ProjectFinder;
