import React, { useState, useCallback } from "react";
import { HistoryContext, IHistoryContext, init } from "./context";
import API from "../../services/api";
import { ApiResponse } from "apisauce";

const HistoryProvider: React.FC = ({ children }) => {
    const [ state, setState ] = useState<IHistoryContext>(init);

    const getHistory = useCallback(() => {
        setState(prev => ({ ...prev, isLoad: true, isError: false }));

        // API.get('/all')
        //     .then(({ ok, data }: ApiResponse<any>) => {
        //         if(ok) {
        //             setState(prev => ({
        //                 ...prev,
        //                 global: data,
        //                 isLoad: false
        //             }));
        //         } else {
        //             setState(prev => ({
        //                 ...prev,
        //                 isLoad: false,
        //                 isError: true,
        //             }));
        //         }
        //     })
    }, []);

    return (
        <HistoryContext.Provider
            value={ {
                ...state,
                getHistory,
            } }
        >
            { children }
        </HistoryContext.Provider>
    );
};

export default HistoryProvider;
