import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderProps } from "./props/index.props";
import CovidIcon from "../../../media/covid-icon.svg";
import { routeNav } from "../../../config/route.nav";

import "./styles/index.scss";

const Header: React.FC<HeaderProps> = () => (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <NavLink to="/" className="header__title">
                    <img className="header__title-icon" src={ CovidIcon } alt=""/>
                    <div className="header__title-text">COVID-19</div>
                </NavLink>
                <div className="header__nav">
                    <nav>
                        {
                            routeNav.map(({ name, route }): JSX.Element => (
                                <NavLink to={ route } key={ route } className="header__nav-item">
                                    { name }
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

Header.defaultProps = {
    isLoading: true,
};

export default Header;
