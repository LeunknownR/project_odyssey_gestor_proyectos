import { useState, useEffect } from "react";
import { ProjectFilters } from "../../types";
import { ProjectListHook } from "./types";
import useUserRole from "src/storage/hooks/useUserRole";
import { APIRequestFunction } from "src/services/types";
import { GroupedProjectList, Project } from "src/entities/project/entities";
import { DBRoles } from "src/config/roles";
import {
    requestGetProjectsForCollaborator,
    requestGetProjectsForGeneralAdmin,
} from "src/services/projects/relatedToProjects";
import { PreloaderHook } from "src/components/Preloader/types";

const useProjectList = (preloader: PreloaderHook, filters: ProjectFilters): ProjectListHook => {
    const [recentProjects, setRecentProjects] = useState<Project[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [triggerRequest, setTriggerRequest] = useState(true);
    const userRole: string | null = useUserRole();
    useEffect(() => {
        if (!userRole || !triggerRequest) return;
        fillProjects();
        setTriggerRequest(false)
        // return () => CancelServiceRequest.cancel();
    }, [userRole, triggerRequest]);
    const fillProjectsBase = async (
        request: APIRequestFunction<GroupedProjectList, string>
    ) => {
        preloader.show("Cargando proyectos...");
        const { data } = await request(filters.searchedProject);
        preloader.hide();
        if (data === null) return;
        setRecentProjects(data?.recents);
        setAllProjects(data?.all);
    };
    const fillProjects = async (): Promise<void> => {
        if (userRole === DBRoles.GeneralAdmin)
            fillProjectsBase(requestGetProjectsForGeneralAdmin);
        else if (userRole === DBRoles.Collaborator)
            fillProjectsBase(requestGetProjectsForCollaborator);
    };
    const doFill = () => setTriggerRequest(true);
    return {
        recentProjects,
        allProjects,
        fillProjects,
        doFill
    };
};

export default useProjectList;
