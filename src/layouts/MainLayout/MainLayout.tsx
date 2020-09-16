import React from "react";
import { MainLayoutProps } from "./index.props";
import Header from "../components/Header";

import "./styles/index.scss";

const MainLayout: React.FC<MainLayoutProps> = (props): JSX.Element => {

    return (
        <div className="main-layout">
            { props.isShowHeader && <Header/> }
            { props.children }
        </div>
    );
};

MainLayout.defaultProps = {
    isShowHeader: true,
};

export default MainLayout;
