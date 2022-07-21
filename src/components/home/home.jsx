import React from "react";
import Typical from "react-typical";

const Home = () => {

    return(
        <div>
            <div className="home-title">
                <h2>Hi, I'm <span className="home-name">Angelique 👩🏻‍💻</span></h2>

                <h3>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "FullStack Web Developer 🛠", 1000,
                            "FrontEnd Developer 🖌", 1000,
                            "BackEnd Developer 🖥", 1000,
                        ]}
                    />
                </h3>
            </div>
        </div>
    );
}

export default Home;