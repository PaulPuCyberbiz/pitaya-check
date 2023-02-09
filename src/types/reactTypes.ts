import { MouseEvent, ChangeEvent } from 'react';

export type OnClick<T> = (e: MouseEvent<T>) => void;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
