import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import ChangeCollaboratorPasswordPayload from "../../routes/collaborator/profile/utils/entities/ChangeCollaboratorPasswordPayload";
import UpdateCollaboratorPhotoPayload from "../../routes/collaborator/profile/utils/entities/UpdateCollaboratorPhotoPayload";
import { CollaboratorCreationForm, CollaboratorUpdatingForm } from "../../routes/generalAdmin/collaborators/utils/entities/CollaboratorForm";
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
            photo, username
        }: CollaboratorUpdatingForm, 
        encryptedPassword: string, 
        urlPhoto: string | null
    ): Promise<QueryResultWithOutParams> {
        const result: any[][] = await DBConnection.query(
            StoredProcedures.UpdateCollaborator,
            [
                id, name, surname, email,
                urlPhoto, photo.changePhoto,
                username, encryptedPassword
            ]);
        const
            resultset1: any[] = result[0],
            resultset2: any[] = result[2];
        return {
            resultset: resultset1,
            outParams: resultset2[0]
        };
    }
    static async createCollaborator({
        name, surname, email,
        username
    }: CollaboratorCreationForm, urlPhoto: string | null, encryptedPassword: string): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateCollaborator,
            [
                name, surname,
                email, urlPhoto,
                username, encryptedPassword
            ]);
        return record;
    }
    static async updateCollaboratorPhoto(
        collaboratorId: number, 
        urlPhoto: string | null
    ): Promise<QueryResultWithOutParams> {
        const result: any[][] = await DBConnection.query(
            StoredProcedures.UpdateCollaboratorPhoto,
            [collaboratorId, urlPhoto]);
        const
            resultset1: any[] = result[0],
            resultset2: any[] = result[2];
        return {
            resultset: resultset1,
            outParams: resultset2[0]
        };
    }
    static async deleteCollaborator(collaboratorId: number): Promise<QueryResultWithOutParams> {
        const result: any[][] = await DBConnection.query(
            StoredProcedures.DeleteCollaborator,
            [
                collaboratorId
            ]);
        const
            resultset1: any[] = result[0],
            resultset2: any[] = result[2];
        return {
            resultset: resultset1,
            outParams: resultset2[0]
        };
    }
    static async changeCollaboratorPassword(
        collaboratorId: number, newPasswordEncrypted: string
    ): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.ChangeCollaboratorPassword,
            [
                collaboratorId, newPasswordEncrypted
            ]);
        return information.affectedRows;
    }
}