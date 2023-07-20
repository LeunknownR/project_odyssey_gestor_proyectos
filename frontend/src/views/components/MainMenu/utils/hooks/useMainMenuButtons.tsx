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
        }, 0);
    }, []);
    const addButton = (button: MainMenuButtonProps, position: number): void => {
        if (buttons.some(({ id }) => id === button.id)) return;
        setButtons(prev => {
            const newButtons: MainMenuButtonProps[] = [...prev];
            if (position) newButtons.splice(position, 0, button);
            else newButtons.push(button);
            return newButtons;
        });
    }
    const removeButton = (buttonId: string): void => {
        setButtons(prev => prev.filter(button => button.id !== buttonId));
    }
    const changeClassNameButton = (id: string, className: string): void => {
        setButtons(prev => prev.map(button => button.id === id ? {
            ...button, 
            className
        } : button));
    }
    return {
        buttons, addButton, removeButton,
        changeClassNameButton
    };
}	
    
export default useMainMenuButtons;