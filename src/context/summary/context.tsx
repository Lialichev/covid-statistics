import { createContext } from "react";

export interface ISummaryContext {
    global: {
        NewConfirmed: number,
        TotalConfirmed: number,
        NewDeaths: number,
        TotalDeaths: number,
        NewRecovered: number,
        TotalRecovered: number,
    } | null;
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
