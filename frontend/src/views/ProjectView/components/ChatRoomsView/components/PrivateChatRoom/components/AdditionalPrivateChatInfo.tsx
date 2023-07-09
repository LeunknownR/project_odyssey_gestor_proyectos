import { DBProjectRoles } from "src/config/roles";
import { AdditionalPrivateChatInfoProps } from "./types";
import useChatViewContext from "../../../utils/context/useChatViewContext";

const AdditionalPrivateChatInfo = ({
    collaboratorRelationList,
}: AdditionalPrivateChatInfoProps) => {
    const { currentPrivateChat } = useChatViewContext();
    return (
        <>
            {collaboratorRelationList.length > 0 ? (
                collaboratorRelationList.map(({ projectName, role }, idx) => (
                    <span key={idx}>
                        <b>
                            {role === DBProjectRoles.ProjectLeader
                                ? "Es tu líder"
                                : "Es tu compañero"}
                        </b>{" "}
                        en el proyecto <b>"{projectName}"</b>
                    </span>
                ))
            ) : (
                <span>
                    Comunícate con{" "}
                    <b>{currentPrivateChat?.collaborator.name}</b> por aquí
                </span>
            )}
        </>
    );
};

export default AdditionalPrivateChatInfo;
