export const getEndpointWithPathVariables = (endpoint: string, params: any[]): string => {
    if (params.length === 0)
        return endpoint;
    const encodedParams: string[] = params.map(param => encodeURIComponent(String(param)));
    return `${endpoint}/${encodedParams.join("/")}`
}
export const sleep = (timeout: number | null): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout === null ? 1000 : timeout);
    });
};