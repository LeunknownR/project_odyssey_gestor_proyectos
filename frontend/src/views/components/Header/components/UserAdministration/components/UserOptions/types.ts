import { User } from "src/entities/user/types";

export type UserOptionsProps = {
    isOpen: boolean;
    currentUser: User | null;
}