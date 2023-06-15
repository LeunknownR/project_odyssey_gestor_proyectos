export type MenuOption = {
    text: string;
    to?: string;
    onClick?: () => void;
    color?: string;
    icon?: string;
};
export type MenuOptionsProps = {
    className?: string;
    options: MenuOption[];
    menuPosition: "left" | "right";
}