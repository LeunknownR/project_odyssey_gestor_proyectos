import { useState } from "react";
import { CollaboratorListHook } from "./types";
import { CollaboratorUser } from "src/entities/collaborator/types";
import { requestGetCollaboratorForAdmin } from "src/services/collaborators/relatedToCollaborators";

const useCollaboratorList = (
    // preloader: PreloaderHook
): CollaboratorListHook => {
    const [collaboratorList, setCollaboratorList] = useState<CollaboratorUser[]>([]);
    const clearCollaborators = () => {
        setCollaboratorList([]);
    }
    const fillCollaborators = async (collaboratorSearched: string) => {
        if (!collaboratorSearched) {
            clearCollaborators();
            return;
        }
        // preloader.show("Cargando destinos...");
        const { data } = await requestGetCollaboratorForAdmin(collaboratorSearched);
        // preloader.hide();
        if (data === null) return;
        setCollaboratorList(data);
    };
    return {
        value: collaboratorList,
        fill: fillCollaborators,
        clear: clearCollaborators
    };
};

export default useCollaboratorList;
