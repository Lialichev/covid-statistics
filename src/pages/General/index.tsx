import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Heading from "./components/Heading";
import withSummary from "../../context/summary/withSummary";
import WorldSituation from "./components/WorldSituation";
import WorldGraph from "./components/WorldGraph";

import "./styles/index.scss";

const General: React.FC = (): JSX.Element => (
    <MainLayout>
        <div className="general">
            <Heading />
            <WorldSituation title="World situation"/>
            <WorldGraph/>
        </div>
    </MainLayout>
);

export default withSummary(General);
