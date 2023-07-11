import { Icon } from "@iconify/react/dist/iconify.js";
import { Sidebar, MenuList, MenuButton, GoHomeButton } from "./styles";
import { SidebarMenuProps } from "./types";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";
import ChatMenuButton from "./constants/ChatMenuButton";
import { AbsolutePaths } from "src/config/absolutePaths";

const SidebarMenu = ({ mainMenuButton }: SidebarMenuProps) => {
    return (
        <Sidebar>
            {mainMenuButton}
            <MenuList>
                <GoHomeButton to={AbsolutePaths.Projects} end activeclassname="active">
                    <span>
                        <Icon icon="material-symbols:home-outline-rounded" />
                    </span>
                </GoHomeButton>
                <ChatMenuButton />
                <MenuButton to={AbsolutePaths.Settings} end activeclassname="active">
                    <span>
                        <Icon icon="uiw:setting" />
                    </span>
                </MenuButton>
            </MenuList>
            <UserAdministration isInSidebar />
        </Sidebar>
    );
};

export default SidebarMenu;
