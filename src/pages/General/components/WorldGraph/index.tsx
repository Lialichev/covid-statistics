import React, { useContext, useEffect } from "react";
import { ISummaryContext, SummaryContext } from "../../../../context/summary/context";

import "./styles/index.scss";

const WorldGraph: React.FC = (): JSX.Element => {
    const { getSummary } = useContext<ISummaryContext>(SummaryContext);

    useEffect(() => {
        getSummary();
    }, [ getSummary ]);

    return (
        <div className="world-situation">
            <div className="container">
                <div className="world-situation__inner">
                    <div className="world-situation__title">
                        World graph
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldGraph;
