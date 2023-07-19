import { User } from "src/entities/user/types";

export type CollaboratorListProps = {
    collaboratorList: Collab[];
};
type Collab = Omit<User, "role">;
