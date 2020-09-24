import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import clsx from "clsx";
import moment from "moment";
import { ISummaryContext, SummaryContext } from "../../../../context/summary/context";
import { WorldSituationProps } from "./props/index.props";
import get from "lodash/get";
import { world_situation_card } from "./presets/index.presets";

import "./styles/index.scss";

const WorldSituation: React.FC<WorldSituationProps> = ({ title }): JSX.Element => {
    const { getSummary, global } = useContext<ISummaryContext>(SummaryContext);

    useEffect(() => {
        getSummary();
    }, [ getSummary ]);

    return (
        <div className="world-situation">
            <div className="box">
                <div className="container">
                    <div className="world-situation__inner">
                        <div className="title">{ title }</div>
                        <div className="world-situation__boxes">
                            {
                                world_situation_card.map((value) => (
                                    <div
                                        className={ clsx('world-situation__card', value.activeClass) }
                                        key={ value.key }
                                    >
                                        <div className="world-situation__number">
                                            { numeral(get(global, value.key)).format(value.format) }
                                        </div>
                                        <div className="world-situation__text">
                                            { value.description }
                                        </div>
                                    </div>
                                ))
                            }
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
        </div>
    );
}

export default WorldSituation;
