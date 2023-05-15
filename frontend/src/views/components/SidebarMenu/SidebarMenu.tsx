import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, NewProjectButton, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";

const SidebarMenu = ({openNewProjectModal}: SidebarMenuProps) => {
    return (
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
    );
};

export default SidebarMenu;
