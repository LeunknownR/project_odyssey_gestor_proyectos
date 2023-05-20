export type ViewModulesRoute = {
    View: () => JSX.Element,
    path: string
}
export type ViewModulesRouteByViewModule = {
    [viewModules: string]: ModuleView;
} 
export type ModuleView = {
    View: () => JSX.Element
    path: string,
    key: string,
};