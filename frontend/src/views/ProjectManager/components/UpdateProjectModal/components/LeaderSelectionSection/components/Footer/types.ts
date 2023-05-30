export type FooterProps = {
    updateProject: () => Promise<void>;
    formIsCompleted: () => boolean;
    tabIdx: number;
    toPage: (idx: number) => void;
};
