export const MOBILE_WIDTH: number = 600;
export const HOST_WS = `${window.location.protocol.startsWith("https") ? "wss" : "ws"}://${new URL(import.meta.env.VITE_API_URL).host}`;