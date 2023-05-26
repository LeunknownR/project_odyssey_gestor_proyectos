import { useState } from "react";
import { SelectCollaboratorHook, SelectCollaboratorHookParams } from "./types";
import { CollaboratorUser } from "src/entities/collaborator/types";

const useSearchCollaborator = ({
    requestSearchCollaborators
}: SelectCollaboratorHookParams): SelectCollaboratorHook => {
    const [collaboratorUserList, setCollaboratorUserList] = useState<CollaboratorUser[]>([]);
    const clearCollaborators = (): void => {
        setCollaboratorUserList([]);
    }
    const fillCollaboratorUserList = async (collaboratorName: string): Promise<void> => {
        if (!collaboratorName) return;
        const data: CollaboratorUser[] = await requestSearchCollaborators(collaboratorName);
        setCollaboratorUserList(data);
    }
    const getCollaboratorText = ({ name, surname }: CollaboratorUser): string => {
        return `${name} ${surname}`;
    }
    return {
        collaboratorUserList,
        fill: fillCollaboratorUserList,
        clear: clearCollaborators,
        getText: getCollaboratorText
    };
};

export default useSearchCollaborator;
