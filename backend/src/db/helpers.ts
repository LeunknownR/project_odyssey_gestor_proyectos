export const bufferToBoolean = (buffer: Buffer): boolean => {
    return buffer[0] === 1;
}