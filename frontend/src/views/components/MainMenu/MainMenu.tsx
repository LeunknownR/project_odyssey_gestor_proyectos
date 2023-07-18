import { Sidebar, MenuList } from "./styles";
import UserAdministration from "../Header/components/UserAdministration/UserAdministration";
import MainMenuButton from "./components/MainMenuButton";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";

const MainMenu = () => {
    const { mainMenuButtonHandler } = useMasterRouterContext()
    return (
        <Sidebar>
            <MenuList>
                {mainMenuButtonHandler.buttons.map(props => (
                    <li key={props.id}>
                        <MainMenuButton {...props}/>
                    </li>
                ))}
            </MenuList>
            <UserAdministration isInSidebar />
        </Sidebar>
    );
};

export default MainMenu;
