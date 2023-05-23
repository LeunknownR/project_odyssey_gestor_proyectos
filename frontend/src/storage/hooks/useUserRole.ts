
import { useState, useEffect } from "react";
import { currentUserLocalStorage } from "../user.local";

const useUserRole = () => {
    const [userRole, setUserRole] = useState<string | null>(null);
    useEffect(() => {
        setUserRole(currentUserLocalStorage.get().role.id);
    }, []);
    return userRole;
}

export default useUserRole;