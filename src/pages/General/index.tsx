import React, { useContext, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Heading from "./components/Heading";
import withSummary from "../../context/summary/withSummary";
import { SummaryContext } from "../../context/summary/context";

import "./styles/index.scss";

const General: React.FC = (): JSX.Element => {
    const { getSummary } = useContext(SummaryContext);

    useEffect(() => {
        getSummary();
    }, [getSummary]);

    return (
        <MainLayout>
            <div className="general">
                <Heading/>
            </div>
        </MainLayout>
    );
}

export default withSummary(General);
