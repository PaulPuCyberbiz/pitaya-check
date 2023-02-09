export enum ToastType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  DEFAULT = 'default',
}

export interface ToastMessage {
  type: ToastType;
  message: React.ReactNode;
  error?: object;
}

export interface UntranslatedToastMessage {
  type: ToastType;
  key: string;
  props?: object;
}

export class NullUntranslatedToastMessage {
  type: ToastType = ToastType.DEFAULT;
  key: string = '';
  props?: object;
}
