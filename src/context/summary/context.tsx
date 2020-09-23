import { createContext } from "react";

export interface IGlobal {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
}

export interface ISummaryContext {
    global: IGlobal | null;
    countries: object[] | null;
    isLoad: boolean;
    isError: boolean;
    getSummary: () => void;
}

export const init: ISummaryContext = {
    global: null,
    countries: null,
    isLoad: false,
    isError: false,
    getSummary: () => {}
}

export const SummaryContext = createContext<ISummaryContext>(init);
