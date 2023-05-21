import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, NewProjectButton, MenuList, MenuButton } from "./styles";
import useModal from "src/components/Modal/utils/hooks/useModal";
import NewProjectModal from "src/views/ProjectManager/components/NewProjectModal/NewProjectModal";
import { currentUserLocalStorage } from "src/storage/user.local";

const SidebarMenu = () => {
    const userRole = currentUserLocalStorage.get();
    const newProjectModal = useModal();
    const openNewProjectModal = () => newProjectModal.handleOpen(true);
    return (
        <>
        <Sidebar>
            <NewProjectButton onClick={openNewProjectModal}><span><Icon icon="mdi:layers-plus"/></span></NewProjectButton>
            <MenuList>
                <MenuButton to="/ralf" activeclassname="active">
                    <span><Icon icon="material-symbols:home-outline-rounded" /></span>
                </MenuButton>
                <MenuButton to="/alexis" activeclassname="active">
                    <span><Icon icon="uiw:setting" /></span>
                </MenuButton>
            </MenuList>
        </Sidebar>
        <NewProjectModal modalProps={newProjectModal} />
        </>
    );
};

export default SidebarMenu;
