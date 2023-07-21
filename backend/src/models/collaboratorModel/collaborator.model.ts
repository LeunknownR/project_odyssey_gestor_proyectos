import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import ChangeCollaboratorPasswordPayload from "../../routes/collaborator/profile/utils/entities/ChangeCollaboratorPasswordPayload";
import UpdateCollaboratorPhotoPayload from "../../routes/collaborator/profile/utils/entities/UpdateCollaboratorPhotoPayload";
import { CollaboratorCreationForm, CollaboratorDeletedForm, CollaboratorUpdatingForm } from "../../routes/generalAdmin/collaborators/utils/entities/CollaboratorForm";
import { QueryResultWithOutParams } from "../types";

export default abstract class CollaboratorModel {
    static async searchCollaborator(username: string): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaborator,
            [username]);
        return resultset;
    }
    static async getCollaboratorList(
        searchedCollaborator: string,
        offset: number
    ): Promise<QueryResultWithOutParams> {
        const result = await DBConnection.query(
            StoredProcedures.GetCollaboratorList,
            [
                searchedCollaborator,
                offset
            ]);
        const
            resultset1: any[] = result[0],
            resultset2: any[] = result[2];
        return {
            resultset: resultset1,
            outParams: resultset2[0]
        };
    }
    static async updateCollaborator({
        id, name, surname, email,
        photo, username, password
    }: CollaboratorUpdatingForm, urlPhoto: string | null): Promise<QueryResultWithOutParams> {
        const result: any[][] = await DBConnection.query(
            StoredProcedures.UpdateCollaborator,
            [
                id, name, surname, email,
                urlPhoto, photo.changePhoto,
                username, password
            ]);
        const
            resultset1: any[] = result[0],
            resultset2: any[] = result[2];
        return {
            resultset: resultset1,
            outParams: resultset2[0]
        };
    }
    static async updateCollaboratorPhoto(collaboratorId: number, urlPhoto: string | null): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.UpdateCollaboratorPhoto,
            [collaboratorId, urlPhoto]);
        return record;
    }
    static async createCollaborator({
        name, surname, email,
        username, password
    }: CollaboratorCreationForm, urlPhoto: string | null): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateCollaborator,
            [
                name, surname,
                email, urlPhoto,
                username, password
            ]);
        return record;
    }
    static async deleteCollaborator({
        collaboratorId
    }: CollaboratorDeletedForm): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteCollaborator,
            [
                collaboratorId
            ]);
        return record;
    }
    static async changeCollaboratorPassword({
        collaboratorId, newPassword
    }: ChangeCollaboratorPasswordPayload): Promise<any> {
        const [record] = await DBConnection.query(
            StoredProcedures.ChangeCollaboratorPassword,
            [collaboratorId, newPassword]);
        return record;
    }
}