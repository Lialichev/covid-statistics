import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
import { ISummaryContext, SummaryContext } from "../../../../context/summary/context";

import "./styles/index.scss";

const WorldSituation: React.FC = (): JSX.Element => {
    const { getSummary, global } = useContext<ISummaryContext>(SummaryContext);

    useEffect(() => {
        getSummary();
    }, [ getSummary ]);

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
                                { numeral(global?.cases).format('0,0') }
                            </div>
                            <div className="world-situation__text">
                                laboratory confirmed cases of the disease
                            </div>
                        </div>
                        <div
                            className="world-situation__card world-situation__card--50 world-situation__card--lightGreen">
                            <div className="world-situation__number">
                                { numeral(global?.recovered).format('0,0') }
                            </div>
                            <div className="world-situation__text">
                                recovered from the coronavirus
                            </div>
                        </div>
                        <div className="world-situation__card world-situation__card--50 world-situation__card--gray">
                            <div className="world-situation__number">
                                { numeral(global?.deaths).format('0,0') }
                            </div>
                            <div className="world-situation__text">
                                deaths of people infected with coronavirus
                            </div>
                        </div>
                        <div
                            className="world-situation__card world-situation__card--33 world-situation__card--lightPink">
                            <div className="world-situation__number">
                                { numeral(global?.todayCases).format('+0,0') }
                            </div>
                            <div className="world-situation__text">
                                new cases per day
                            </div>
                        </div>
                        <div className="world-situation__card world-situation__card--33 world-situation__card--lightGreen">
                            <div className="world-situation__number">
                                { numeral(global?.todayRecovered).format('+0,0') }
                            </div>
                            <div className="world-situation__text">
                                new recovered cases per day
                            </div>
                        </div>
                        <div className="world-situation__card world-situation__card--33 world-situation__card--gray">
                            <div className="world-situation__number">
                                { numeral(global?.todayDeaths).format('+0,0') }
                            </div>
                            <div className="world-situation__text">
                                new death cases per day
                            </div>
                        </div>
                    </div>
                    <div className="world-situation__updated">
                        Information as of { moment(global?.updated).format('MMMM DD, hh:mm a') }
                    </div>
                    <div className="world-situation__more">
                        <Link to="/" className="btn btn--white">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldSituation;
