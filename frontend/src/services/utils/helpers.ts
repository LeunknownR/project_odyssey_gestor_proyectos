export const getEndpointWithPathVariables = (endpoint: string, params: any[]): string => {
    if (params.length === 0)
        return endpoint;
    const encodedParams: string[] = params.map(param => encodeURIComponent(String(param)));
    return `${endpoint}/${encodedParams.join("/")}`
}