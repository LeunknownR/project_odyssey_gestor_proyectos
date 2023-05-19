export type ResponseBody<T> = {
    code: number;
    message: string;
    data: T | null;
};
export type APIRequestFunction<R, P> = (params: P) => Promise<ResponseBody<R>>;
export type APIRequestFunctionNoParams<R> = () => Promise<ResponseBody<R>>;