import { SessionUser } from "src/entities/user/types";

export type UserOptionsProps = {
    areOpen: boolean;
    closeOptions: () => void;
    currentUser: SessionUser | null;
}