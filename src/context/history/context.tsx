import { createContext } from "react";

export interface IHistoryContext {
    data: object | null;
    isLoad: boolean;
    isError: boolean;
    getHistory: () => void;
}

export const init: IHistoryContext = {
    data: null,
    isLoad: false,
    isError: false,
    getHistory: () => {},
}

export const HistoryContext = createContext<IHistoryContext>(init);
