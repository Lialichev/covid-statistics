import React from "react";
import MicrobeBlurredPhoto from "../../../../media/microbe-blurred.png";
import { HeadingProps } from "./props/index.props";

import "./styles/index.scss";

const Heading: React.FC<HeadingProps> = ({ mainTitle, secondTitle }): JSX.Element => (
    <div className="heading">
        <div className="container">
            <div className="heading__inner">
                <div className="heading__main-title">{ mainTitle }</div>
                <div className="heading__second-title">{ secondTitle }</div>
            </div>
        </div>
        <img className="heading__top-photo" src={ MicrobeBlurredPhoto } alt=""/>
    </div>
);

export default Heading;
