export type ResponseBody<T = null> = {
    code: number;
    message: string;
    data: T
};
export type APIRequestFunction<R, P> = (params: P) => Promise<ResponseBody<R>>;
export type APIRequestFunctionNoParams<R> = () => Promise<ResponseBody<R>>;