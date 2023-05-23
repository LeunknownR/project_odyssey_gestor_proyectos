import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";

const SidebarMenu = ({
    mainMenuButton
}: SidebarMenuProps) => {
    return (
        <>
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                <MenuButton to="/ralf" activeclassname="active">
                    <span><Icon icon="material-symbols:home-outline-rounded" /></span>
                </MenuButton>
                <MenuButton to="/alexis" activeclassname="active">
                    <span><Icon icon="uiw:setting" /></span>
                </MenuButton>
            </MenuList>
        </Sidebar>
        </>
    );
};

export default SidebarMenu;
