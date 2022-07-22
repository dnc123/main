declare type ToastType = 'danger' | 'success' | 'neutral';
declare type Payload = {
    type: ToastType;
    icon: string;
    message: string;
};
export default function (payload: Payload): void;
export {};
