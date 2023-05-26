export type SearchedItemToShow = {
    value?: string | number;
    content: JSX.Element;
    text?: string;
}
export type SearchedItemProps = {
    item: SearchedItemToShow;
    onClick: () => void;
}