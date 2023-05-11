import { useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";

const MasterRouter = () => {
    const navigate = useNavigate();
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    // const [currentUser, setCurrentUser] = useState<User | null>(null);
    return <></>;
};

export default MasterRouter;
