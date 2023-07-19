export type PageItemProps = {
    page: number;
    selected: boolean;
    changeCurrentPage: (page:number) => void;
    color?: string;
}