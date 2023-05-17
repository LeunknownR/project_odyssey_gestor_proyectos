import { useState } from "react";
import useModal from "src/components/Modal/utils/hooks/useModal";
import { Container } from "./styles";
import AddMembersModal from "../ProjectManager/components/AddMembersModal/AddMembersModal";
import RecentProjects from "../ProjectManager/components/RecentProjects/RecentProjects";
import AllProjects from "../ProjectManager/components/AllProjects/AllProjects";

const Alexis = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showAllSubMenu, setShowAllSubMenu] = useState(false);
    const updateDateModal = useModal(false);
    const handleMenuClick = () => setShowSubMenu(!showSubMenu);
    const handleAllMenuClick = () => setShowAllSubMenu(!showAllSubMenu);
    return (
        <>
        <Container>
            <RecentProjects />
            <AllProjects />
        </Container>
        <AddMembersModal modalProps={updateDateModal} />
        </>
    );
};

export default Alexis;
