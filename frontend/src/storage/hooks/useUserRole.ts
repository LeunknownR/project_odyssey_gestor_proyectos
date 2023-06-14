import { useState, useEffect } from "react";
import { currentUserLocalStorage } from "../user.local";
import { DBRoles } from "src/config/roles";

const useUserRole = (): DBRoles | null => {
    const [userRole, setUserRole] = useState<DBRoles | null>(null);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        if (!currentUser) return;
        setUserRole(currentUser.role.id as DBRoles);
    }, []);
    return userRole;
}

export default useUserRole;