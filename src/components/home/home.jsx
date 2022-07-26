import React from "react";
import Typical from "react-typical";

import Navigation from "../navigation/navigation";

import { ReactComponent as Angelique } from "../../assets/Angelique.svg";

import {
    HomeContainer, 
    HomeImage, 
    HomeTitle,
} from "./styles";


const Home = () => {

    return(
        <HomeContainer>
            <Navigation/>
            <HomeTitle>
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
            </HomeTitle>

            <HomeImage>
                <Angelique/>
            </HomeImage>
        </HomeContainer>
    );
}

export default Home;