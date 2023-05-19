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
};