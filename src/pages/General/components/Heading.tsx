import React from "react";

import "./styles/index.scss";

const Heading: React.FC = (): JSX.Element => {

    return (
        <div className="heading">
            <div className="heading__title">
                COVID-19 <br/>
                Coronavirus pandemic
            </div>
        </div>
    )
};

export default Heading;
