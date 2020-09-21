import React from "react";
import MicrobeBlurredPhoto from "../../../../media/microbe-blurred.png";

import "./styles/index.scss";

const Heading: React.FC = (): JSX.Element => {

    return (
        <div className="heading">
            <div className="container">
                <div className="heading__inner">
                    <div className="heading__main-title">
                        COVID-19
                    </div>
                    <div className="heading__second-title">
                        Coronavirus pandemic
                    </div>
                </div>
            </div>
            <img className="heading__top-photo" src={ MicrobeBlurredPhoto } alt=""/>
        </div>
    )
};

export default Heading;
