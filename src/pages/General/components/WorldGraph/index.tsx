import React, { useContext, useEffect } from "react";
import { ISummaryContext, SummaryContext } from "../../../../context/summary/context";

import "./styles/index.scss";

const WorldGraph: React.FC = (): JSX.Element => {
    const {  } = useContext<ISummaryContext>(SummaryContext);

    useEffect(() => {

    }, [  ]);

    return (
        <div className="world-graph">
            <div className="container">
                <div className="world-graph__inner">
                    <div className="title">
                        World graph
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldGraph;
