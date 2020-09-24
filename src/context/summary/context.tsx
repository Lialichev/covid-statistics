import { createContext } from "react";

export interface IGlobal {
    updated?: number;
    cases?: number;
    todayCases?: number;
    deaths?: number;
    todayDeaths?: number;
    recovered?: number;
    todayRecovered?: number;
    active?: number;
    critical?: number;
    casesPerOneMillion?: number;
    deathsPerOneMillion?: number;
    tests?: number;
    testsPerOneMillion?: number;
    population?: number;
    oneCasePerPeople?: number;
    oneDeathPerPeople?: number;
    oneTestPerPeople?: number;
    activePerOneMillion?: number;
    recoveredPerOneMillion?: number;
    criticalPerOneMillion?: number;
    affectedCountries?: number;
}

export interface ISummaryContext {
    global: IGlobal | null;
    isLoad: boolean;
    isError: boolean;
    getSummary: () => void;
}

export const init: ISummaryContext = {
    global: null,
    isLoad: false,
    isError: false,
    getSummary: () => {}
}

export const SummaryContext = createContext<ISummaryContext>(init);
