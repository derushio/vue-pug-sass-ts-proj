declare interface DialogOption {
    type?: string;
    title?: string;
    message?: string;
    hasIcon?: boolean;
    icon?: string;
    iconPack?: string;
    size?: string;
    animation?: string;
    confirmText?: string;
    cancelText?: string;
    canCancel?: boolean | string[];
    inputAttrs?: any;
    onConfirm?: (value?: string) => void;
    onCancel?: () => void;
    scroll?: string;
}

declare interface SnackbarOption {
    type?: string;
    message?: string;
    position?: string;
    duration?: number;
    queue?: boolean;
    container?: string;
    actionText?: string;
    onAction?: () => void;
}

declare interface ToastOption {
    type?: string;
    message?: string;
    position?: string;
    duration?: number;
    queue?: boolean;
    container?: string;
}
