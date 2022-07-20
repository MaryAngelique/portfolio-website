import React from "react";

import Navigation from "../navigation/navigation";

const AboutMe = () => {
    return(
        <div>
            <Navigation/>
            <h1>About Me</h1>

            {/* Personal information */}
            <div className="personal-info">
                <h3>
                    <span className="personal-info-span">
                        Name
                    </span>
                    Mary Angelique A. Abacajan
                </h3>

                <h3>
                    <span className="personal-info-span">
                        Location
                    </span>
                    Hickory, North Carolina
                </h3>

                <h3>
                    <span className="personal-info-span">
                        Email
                    </span>
                    abacajanma@gmail.com
                </h3>

                <h3>
                    <span className="personal-info-span">
                        LinkedIn
                    </span>
                    <a className="personal-info-link" href="https://www.linkedin.com/in/mary-angelique-abacajan/" target="_blank" rel="noreferrer">
                        Linked
                    </a>
                </h3>

                <h3>
                    <span className="personal-info-span">
                        GitHub
                    </span>
                    <a className="personal-info-link" href="https://github.com/MaryAngelique" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </h3>
            </div>
            
        </div>
    );
}

export default AboutMe;