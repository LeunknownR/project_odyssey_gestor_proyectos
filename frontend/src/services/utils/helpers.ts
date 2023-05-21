export const getEndpointWithPathVariables = (endpoint: string, params: any[]): string => {
    const encodedParams: string[] = params.map(param => encodeURIComponent(String(param)));
    return `${endpoint}/${encodedParams.join("/")}`
}