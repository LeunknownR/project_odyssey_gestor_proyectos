import { MainMenuButtonProps } from "../../components/MainMenuButton/types";

export type MainMenuButtonHandler = {
    buttons: MainMenuButtonProps[];
    addButton: (button: MainMenuButtonProps, position: number) => void;
    removeButton: (buttonId: string) => void;
    changeClassNameButton: (id: string, className: string) => void;
};