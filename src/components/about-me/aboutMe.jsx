import React from "react";

import Navigation from "../navigation/navigation";

const AboutMe = () => {
    return(
        <div>
            <Navigation/>
            <h1>About Me</h1>

            {/* Personal information */}
            <div className="personal-info">
                <h2 className="info-title">
                    Personal information
                </h2>

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

            {/* FullStack Web Developer */}
            <div className="dev-description">
                <h2 className="info-title">
                    FullStack Web Developer
                </h2>
                
                <p>
                    I am Angelique and I am Software Engineer that studied and graduated as a FullStack Web Developer from BloomTech, coding bootcamp in a remote environment.

                    I grew up with technology and as someone who was born and raised in a third world country, technology is a limited resource. I was fortunate enough that my grandmother works in the municipal office, which made technology accessible for me. 
                    
                    I chose this career field to help and develop websites that are accessible. One day, I would like to build a website of a library that is full of educational resources for teachers and students to help the future generations equipped with knowledge and resources they need right on their finger tips. I also want to pursue my passion in design by creating websites that are aesthetic to see and also accessible for a wide range of users.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;