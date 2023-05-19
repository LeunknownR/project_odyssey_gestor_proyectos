export class LocalStorage<T> {
    private key: string;
    constructor(key: string) {
        this.key = key;
    }
    public get(): T {
        return JSON.parse(localStorage.getItem(this.key)!);
    }
    public set(value: T): void {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
    public remove(): void {
        localStorage.removeItem(this.key);
    }
};
export class SessionStorage<T> {
    private key: string;
    constructor(key: string) {
        this.key = key;
    }
    public get(): T {
        return JSON.parse(sessionStorage.getItem(this.key)!);
    }
    public set(value: T): void {
        sessionStorage.setItem(this.key, JSON.stringify(value));
    }
    public remove(): void {
        sessionStorage.removeItem(this.key);
    }
}