export type ViewModulesRoute = {
    View: () => JSX.Element,
    path: string
}
export type ViewModulesRouteByViewModule = {
    [viewModules: string]: ViewModulesRoute;
} 