import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Heading from "./components/Heading";

import "./styles/index.scss";

const General: React.FC = (): JSX.Element => {

    return (
        <MainLayout>
            <div className="general">
                <Heading />
            </div>
        </MainLayout>
    )
};

export default General;
