type SliderHandlersType = {
    touchStart: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchMove: (touches: React.TouchEvent<HTMLDivElement>) => void;
    touchEnd: () => void;
};

export type SliderHook = {
    currentTranslateX: number;
    dragging: boolean;
    handler: SliderHandlersType;
    idxActiveCard: number;
};
