export declare function useEventBus(): {
    busEmit: (key: string, payload?: any) => void;
    busOn: (key: string, callback: Function) => void;
    busOff: (key: string, callback: Function) => void;
    busOnce: (key: string, callback: Function) => void;
};
