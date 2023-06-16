export type FooterProps = {
    registerProject: () => Promise<void>;
    formIsCompleted: () => boolean;
    tabIdx: number;
    toPage: (idx: number) => void;
};
