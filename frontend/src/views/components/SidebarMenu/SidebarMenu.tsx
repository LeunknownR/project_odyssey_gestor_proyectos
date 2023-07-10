import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";
import { MENU_LINKS } from "./constants";
import ChatMenuButton from "./constants/ChatMenuButton";

const SidebarMenu = ({ mainMenuButton }: SidebarMenuProps) => {
    return (
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                <ChatMenuButton />
                {MENU_LINKS.map(({ to, icon }, idx) => (
                    <MenuButton key={idx} to={to} end activeclassname="active">
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
