import { useEffect, useState } from "react";
import { MainMenuButtonHandler } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { MainMenuButtonProps } from "../../components/MainMenuButton/types";

const useMainMenuButtons = (): MainMenuButtonHandler => {
    const [buttons, setButtons] = useState<MainMenuButtonProps[]>([]);
    useEffect(() => {
        addButton({
            id: "PROJECTS",
            to: AbsolutePaths.Projects,
            icon: "mingcute:home-1-line"
        });
    }, []);
    const addButton = (button: MainMenuButtonProps): void => {
        if (buttons.some(({ id }) => id === button.id)) return;
        setButtons(prev => ([
            ...prev,
            button
        ]));
    }
    const changeClassNameButton = (id: string, className: string): void => {
        setButtons(prev => prev.map(button => button.id === id ? {
            ...button, 
            className
        } : button));
    }
    return {
        buttons, addButton,
        changeClassNameButton
    };
}	
    
export default useMainMenuButtons;