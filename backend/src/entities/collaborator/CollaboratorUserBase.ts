import { UserBase } from "../user/UserBase";

type CollaboratorUserBase = UserBase & {
	readonly id: number;
};

export default CollaboratorUserBase;