import { useState } from "react";
import { SelectCollaboratorHook, SelectCollaboratorHookParams } from "./types";
import { CollaboratorUser } from "src/entities/collaborator/types";

const useSelectCollaborator = ({
    requestSearchCollaborators
}: SelectCollaboratorHookParams): SelectCollaboratorHook => {
    const [collaboratorUserList, setCollaboratorUserList] = useState<CollaboratorUser[]>([]);
    const clearCollaborators = (): void => {
        setCollaboratorUserList([]);
    }
    const fillCollaboratorUserList = async (value: string): Promise<void> => {
        const data: CollaboratorUser[] = await requestSearchCollaborators(value);
        setCollaboratorUserList(data);
    }
    const getCollaboratorText = ({ name, surname }: CollaboratorUser): string => {
        return `${name} ${surname}`;
    }
    return {
        value: collaboratorUserList,
        fill: fillCollaboratorUserList,
        clear: clearCollaborators,
        getText: getCollaboratorText
    };
};

export default useSelectCollaborator;
