import { SessionUser } from "src/entities/user/types";

export type UserOptionsProps = {
    isOpen: boolean;
    currentUser: SessionUser | null;
}