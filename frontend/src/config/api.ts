import axios, { AxiosInstance } from "axios";
import { HOST_HTTP } from "./constants";

export abstract class APIHandler {
    public static api: AxiosInstance;
    public static init(): void {
        APIHandler.api = axios.create({
            baseURL: `${HOST_HTTP}/api`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            signal: CancelServiceRequest.getSignal()
        });
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
