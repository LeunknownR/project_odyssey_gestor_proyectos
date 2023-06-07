export type PreloaderProps = {
    hidden: boolean,
    message: string
}
export type PreloaderHook = {
    value: PreloaderProps,
    hide: () => void, 
    show: (message: string | null) => void
}