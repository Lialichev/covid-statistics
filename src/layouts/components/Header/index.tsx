import React from "react";
import {NavLink} from "react-router-dom";
import {HeaderProps} from "./index.props";
import CovidIcon from "../../../media/covid-icon.svg";

import "./styles/index.scss";

const Header: React.FC<HeaderProps> = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="header__title">
                        <img className="header__title-icon" src={CovidIcon} alt=""/>
                        <div className="header__title-text">COVID-19</div>
                    </NavLink>
                    <div className="header__nav">
                        <nav>
                            <NavLink to="/" className="header__nav-item">
                                General
                            </NavLink>
                            <NavLink to="/countries" className="header__nav-item">
                                Countries
                            </NavLink>
                            <NavLink to="/countries" className="header__nav-item">
                                Graphs
                            </NavLink>
                            <NavLink to="/countries" className="header__nav-item">
                                Death Rat
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    isLoading: true,
};

export default Header;
