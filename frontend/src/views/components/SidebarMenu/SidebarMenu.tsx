import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";
import { MENU_LINKS } from "./constants";

const SidebarMenu = ({ mainMenuButton }: SidebarMenuProps) => {
    return (
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                {MENU_LINKS.map(({ to, icon }) => (
                    <MenuButton to={to} end activeclassname="active">
                        <span>
                            <Icon icon={icon} />
                        </span>
                    </MenuButton>
                ))}
            </MenuList>
            <UserAdministration isInSidebar />
        </Sidebar>
    );
};

export default SidebarMenu;
