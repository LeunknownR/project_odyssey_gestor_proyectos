
type Restriction = {
    [key: string]: (e: KeyboardEvent) => void;
};
export const RESTRICTIONS: Restriction = {
    onlyNumbers: (e: KeyboardEvent) => {
        if (/[0-9]/.test(e.key)) return;
        e.preventDefault();
    },
};