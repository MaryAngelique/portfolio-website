import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import styled from "styled-components";

import CoderHeroes from "./assets/coderheroes.png";
import Todo from "./assets/todo-app.png"
import Potluck from "./assets/potluck-planner.png"
import Market from "./assets/african-marketplace.png"
import Speak from "./assets/speak-your-number.png";
import Monsta from "./assets/MonstaDex.png";
import Typing from "./assets/typing-game.png";
import Expense from "./assets/expense-tracker.png";
import MovieSeat from "./assets/movie-seat-booking.png";
import Movies from "./assets/movie-app.png";
import Drink from "./assets/drink-water.png";

import {
    ProjectsContainer,
    ProjectStyles,
} from "./styles";

const List = styled.div`
    display: inline-start;
    text-decoration: none;
    list-style: none;
    line-height: 1.6rem;

    :hover {
            transform: scale(1.1);
    }

    a {
        text-decoration: none;
        color: #f9d342;
    }

    h3 {
        text-align: center;
        margin-bottom: 20px;

        :hover {
            cursor: pointer;
            border-bottom: #f9d342 3px dotted;
        }
    }
    
    img {
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }
`;

const Projects = () => {

    return(
        <ProjectsContainer>
            <Navigation/>

            <ProjectsContainer>
                <ul className="project-list">
                    <ProjectStyles>
                        <List>
                            <a href="https://a.coderheroes.dev/" target="_blank">
                                <h3>CoderHeroes</h3>
                                <img src={CoderHeroes} alt="" className="image"/>
                            </a>   
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Todo App</h3>
                            <img src={Todo} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                     
                    <ProjectStyles>
                        <List>
                            <h3>PotLuck Planner</h3>
                            <img src={Potluck} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>African Marketplace</h3>
                            <img src={Market} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>Speak Your Number</h3>
                            <img src={Speak} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>MonstaDex</h3>
                            <img src={Monsta} alt="" className="image"/>
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Typing Game</h3>
                            <img src={Typing} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                    <ProjectStyles>
                        <List>
                            <h3>Expense Tracker</h3>
                            <img src={Expense} alt="" className="image"/>
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Movie Seat Booking</h3>
                            <img src={MovieSeat} alt="" className="image"/>
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Movie App</h3>
                            <img src={Movies} alt="" className="image"/>
                        </List>
                    </ProjectStyles>

                    <ProjectStyles>
                        <List>
                            <h3>Drink Water</h3>
                            <img src={Drink} alt="" className="image"/>
                        </List>
                    </ProjectStyles>
                    
                </ul>
            </ProjectsContainer>
      </ProjectsContainer>
    );
}

export default Projects;