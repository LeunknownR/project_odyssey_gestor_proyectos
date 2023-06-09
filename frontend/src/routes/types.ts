export type ViewModulesRoute = {
    View: () => JSX.Element | null,
    path: string
}
export type ViewModulesRouteByViewModule = {
    [viewModules: string]: ViewModulesRoute;
} 