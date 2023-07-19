import { User } from "../../entities/user/User";
import CollaboratorModel from "../../models/collaboratorModel/collaborator.model";
import SearchedCollaboratorPayload from "../../routes/generalAdmin/collaborators/utils/entities/SearchedCollaboratorPayload";
import { COLLABORATOR_RECORDS_BY_PAGE } from "./utils/constants";

export default abstract class CollaboratorController {
    public static getCollaboratorList = async ({ 
        searchedCollaborator, page 
    }: SearchedCollaboratorPayload): Promise<User[]> => {
        const offset: number = (page - 1) * COLLABORATOR_RECORDS_BY_PAGE;
        const resulset: any[] = await CollaboratorModel.getCollaboratorList(searchedCollaborator, offset);
        const userList: User[] = resulset.map(record => new User(record));
        return userList;
    }
};