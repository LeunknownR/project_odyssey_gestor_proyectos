//#region Libraries
import { useState } from "react";
//#endregion
//#region Utils
import { INIT_DATA_PAGINATOR } from "../constants";
import { PaginatorHookType } from "../types";
//#endregion

const usePaginator = (): PaginatorHookType => {
    const [dataPaginator, setDataPaginator] = useState({
        ...INIT_DATA_PAGINATOR,
    });
    //#region Functions
    const movePage = (currentPage: number) => {
        setDataPaginator(prev => ({
            ...prev,
            currentPage,
        }));
    };
    const clearDataPaginator = () => {
        setDataPaginator({ ...INIT_DATA_PAGINATOR });
    };
    const setQuantityPages = (quantityPages: number, totalRecords: number) => {
        setDataPaginator(prev => ({
            ...prev,
            quantityPages,
            totalRecords,
        }));
    };
    return {
        data: dataPaginator,
        movePage,
        clear: clearDataPaginator,
        setQuantityPages,
    };
};

export default usePaginator;
