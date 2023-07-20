type PaginatorType = {
    data: {
        currentPage: number;
        quantityPages: number;
    };
    changeData: (page : number) => void;
    color?: string;
};

export default PaginatorType;