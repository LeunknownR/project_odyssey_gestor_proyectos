export type InitDataType = {
    currentPage: number;
    quantityPages: number;
    totalRecords: number;
};

export type PaginatorHookType = {
    data: InitDataType;
    movePage: (currentPage: number) => void;
    clear: () => void;
    setQuantityPages: (quantityPages: number, totalRecords: number) => void;
};