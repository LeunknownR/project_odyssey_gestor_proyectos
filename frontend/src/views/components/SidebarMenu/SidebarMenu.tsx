import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton } from "./styles";
import { SidebarMenuProps } from "./types";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";
import ChatMenuButton from "./constants/ChatMenuButton";
import { AbsolutePaths } from "src/config/absolutePaths";
import { DBRoles } from "src/config/roles";
import useUserRole from "src/storage/hooks/useUserRole";

const SidebarMenu = ({ mainMenuButton }: SidebarMenuProps) => {
    const userRole = useUserRole();
    return (
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                <MenuButton 
                    className={({ isActive }) => isActive ? "active" : ""}
                    to={AbsolutePaths.Projects} 
                    end>
                    <span>
                        <Icon icon="mingcute:home-1-line" />
                    </span>
                </MenuButton>
                {userRole === DBRoles.GeneralAdmin && 
                <ChatMenuButton />}
                <MenuButton 
                    className={({ isActive }) => isActive ? "active" : ""}
                    to={AbsolutePaths.Settings}>
                    <span>
                        <Icon icon="ep:setting" />
                    </span>
                </MenuButton>
            </MenuList>
            <UserAdministration isInSidebar />
        </Sidebar>
    );
};

export default SidebarMenu;
