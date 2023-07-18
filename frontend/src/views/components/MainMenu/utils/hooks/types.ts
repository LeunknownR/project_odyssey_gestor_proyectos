import { MainMenuButtonProps } from "../../components/MainMenuButton/types";

export type MainMenuButtonHandler = {
    buttons: MainMenuButtonProps[];
    addButton: (button: MainMenuButtonProps) => void;
    changeClassNameButton: (id: string, className: string) => void;
};