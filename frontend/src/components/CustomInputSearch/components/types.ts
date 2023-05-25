export type SearchedItemToShow = {
    value?: string | number;
    text: string;
    urlPhoto: string | null;
}
export type SearchedItemProps = {
    item: SearchedItemToShow;
    onClick: () => void;
}