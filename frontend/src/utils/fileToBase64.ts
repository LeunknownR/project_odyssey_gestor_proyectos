export const fileToBase64 = (file: Blob): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file); // Definiendo archivo a leer
        reader.onload = () => {
            if (!reader.result || typeof reader.result !== "string") return;
            resolve(reader.result);
        };
        reader.onerror = err => {
            reader.abort();
            reject(err);
        };
    });
};
