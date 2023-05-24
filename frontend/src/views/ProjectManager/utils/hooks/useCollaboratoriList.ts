import { useState } from "react";
import { CollaboratorListHook } from "./types";
import { CollaboratorUser } from "src/entities/collaborator/types";
import { requestGetCollaboratorForAdmin } from "src/services/collaborators/relatedToCollaborators";

const useCollaboratorList = (
    // preloader: PreloaderHook
): CollaboratorListHook => {
    const [destinationList, setDestinationList] = useState<CollaboratorUser[]>([]);
    const clearDestinations = () => {
        setDestinationList([]);
    }
    const fillDestinations = async (destinationSearched: string) => {
        if (!destinationSearched) {
            clearDestinations();
            return;
        }
        // preloader.show("Cargando destinos...");
        const { data } = await requestGetCollaboratorForAdmin(destinationSearched);
        // preloader.hide();
        if (data === null) return;
        setDestinationList(data);
    };
    return {
        value: destinationList,
        fill: fillDestinations,
        clear: clearDestinations
    };
};

export default useCollaboratorList;
