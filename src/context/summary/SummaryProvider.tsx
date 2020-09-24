import React, { useState, useCallback } from "react";
import { SummaryContext, ISummaryContext, init } from "./context";
import API from "../../services/api";
import { ApiResponse } from "apisauce";

const SummaryProvider: React.FC = ({ children }) => {
    const [ state, setState ] = useState<ISummaryContext>(init);

    const getSummary = useCallback(() => {
        setState(prev => ({ ...prev, isLoad: true, isError: false }));

        API.get('/all')
            .then(({ ok, data }: ApiResponse<any>) => {
                if(ok) {
                    setState(prev => ({
                        ...prev,
                        global: data,
                        isLoad: false
                    }));
                } else {
                    setState(prev => ({
                        ...prev,
                        isLoad: false,
                        isError: true,
                    }));
                }
            })
    }, []);

    return (
        <SummaryContext.Provider
            value={ {
                ...state,
                getSummary,
            } }
        >
            { children }
        </SummaryContext.Provider>
    );
};

export default SummaryProvider;
