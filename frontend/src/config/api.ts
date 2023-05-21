import axios, { AxiosInstance } from "axios";

export abstract class APIHandler {
    public static api: AxiosInstance;
    public static init(): void {
        APIHandler.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal: CancelServiceRequest.getSignal()
        });
        // requestLogin({
        //     username: "diegot",
        //     password: "diegot123"
        // });
    }
}
export abstract class CancelServiceRequest {
    private static abortController: AbortController = new AbortController();
    public static cancelWhenLeavePage(): void {
        window.addEventListener("unload", e => {
            e.preventDefault();
            CancelServiceRequest.cancel();
        });
    }
    public static cancel() {
        this.abortController.abort();
        this.abortController = new AbortController();
    }
    public static getSignal(): AbortSignal {
        return this.abortController.signal;
    }
}
