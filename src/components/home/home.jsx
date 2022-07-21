import React from "react";
import Typical from "react-typical";

import Navigation from "../navigation/navigation";

import { ReactComponent as Angelique } from "../../assets/Angelique.svg";


const Home = () => {

    return(
        <div className="home">
            <Navigation/>
            <div className="home-title">
                <h2>Hi, I'm <span className="home-name">Angelique <span role="img" aria-label="girl in a computer">👩🏻‍💻</span></span></h2>

                <h3>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "FullStack Web Developer 🛠", 2000,
                            "FrontEnd Developer 🖌", 2000,
                            "BackEnd Developer 🖥", 2000,
                        ]}
                    />
                </h3>
            </div>

            <div className="home-image">
                <Angelique/>
            </div>
        </div>
    );
}

export default Home;