import React from "react";

import Navigation from "../navigation/navigation"

import {
    ContactContainer, 
    ContactContent,
    Title,
    ContactForm,
    Label,
    Button
} from "./styles"

const InputStyle = {
    padding: "10px",
    lineHeight: 1,
    marginLeft: "5rem",
    fontSize: "16px",
    width: "20rem",
    color: "#292826",
    borderRadius: "10px"
}

const DescriptionStyle = {
    padding: "10px",
    lineHeight: 1,
    marginLeft: "2.5rem",
    fontSize: "16px",
    width: "20rem",
    color: "#292826",
    borderRadius: "10px"
}

const Contact = () => {
    return(
        <ContactContainer>
            <Navigation/>
            <ContactContent>
                <Title>Let's Chat!</Title>

                <div className="contact-form-container">
                    <ContactForm>
                        <div>
                            <Label>
                                Name
                            
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type={"text"}
                                    style={InputStyle}
                                />
                            </Label>
                        </div>

                        <div>
                            <Label>
                                Email

                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type={"text"}
                                    style={InputStyle}
                                />
                            </Label>
                        </div>

                        <div>
                            <Label>
                                Description
                           
                                <textarea
                                    required
                                    name="description"
                                    className="inputDescription"
                                    type={"text"}
                                    rows="5"
                                    style={DescriptionStyle}
                                />
                            </Label>
                        </div>
                    </ContactForm>

                    <Button>Submit</Button>
                </div>
            </ContactContent>
        </ContactContainer>
    );
}

export default Contact;