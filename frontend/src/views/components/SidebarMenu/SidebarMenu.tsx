import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";

const SidebarMenu = ({
    mainMenuButton
}: SidebarMenuProps) => {
    return (
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                <MenuButton 
                    to={AbsolutePaths.Projects} activeclassname="active">
                    <span><Icon icon="material-symbols:home-outline-rounded" /></span>
                </MenuButton>
                <MenuButton 
                    to={AbsolutePaths.Settings}
                    activeclassname="active">
                    <span><Icon icon="uiw:setting" /></span>
                </MenuButton>
            </MenuList>
            <UserAdministration isInSidebar/>
        </Sidebar>
    );
};

export default SidebarMenu;
