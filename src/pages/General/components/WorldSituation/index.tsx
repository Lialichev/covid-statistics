import React from "react";
import { WorldSituationProps } from "./props/index.props";

import "./styles/index.scss";

const WorldSituation: React.FC<WorldSituationProps> = ({ global }): JSX.Element => {

    return (
        <div className="world-situation">
            <div className="container">
                <div className="world-situation__inner">
                    <div className="world-situation__title">
                        World situation
                    </div>
                    <div className="world-situation__boxes">
                        <div className="world-situation__card">
                            <div className="world-situation__number">
                                { global?.TotalConfirmed }
                            </div>
                            <div className="world-situation__text">
                                laboratory confirmed cases of the disease
                            </div>
                        </div>
                        <div className="world-situation__card world-situation__card--50">181 237</div>
                        <div className="world-situation__card world-situation__card--50">181 237</div>
                        <div className="world-situation__card world-situation__card--33">181 237</div>
                        <div className="world-situation__card world-situation__card--33">181 237</div>
                        <div className="world-situation__card world-situation__card--33">181 237</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WorldSituation;
