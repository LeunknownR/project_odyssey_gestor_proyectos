import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { checkLength } from "../../../../../utils/strings";

export default class SearchedCollaboratorPayload {
    readonly searchedCollaborator: string;
    private _page: PositiveNumberNonZero;
    constructor({
        searchedCollaborator,
        page
    }: any) {
        if (!checkLength(searchedCollaborator, 1, 100))
            throw new Error("Invalid searched collaborator");
        this.searchedCollaborator = searchedCollaborator;
        this._page = new PositiveNumberNonZero(page);
    }
    get page(): number {
        return this._page.value;
    }
}