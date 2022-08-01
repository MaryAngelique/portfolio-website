import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

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
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
        .sendForm(
            "service_b4qmiqc",
            "template_h9rzd14",
            form.current,
            "user_UHpNJFij8MtQD1aAfs38X"
        )
        .then(
            (result) => {
                console.log(result.text);
                alert("SUCCESS!");
            },
            (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            }
        );
    };
    
    return(
        <ContactContainer>
            <Navigation/>
            <Title>Let's Talk</Title>

            <ContactContent ref={form} onSubmit={sendEmail}>
                <ContactForm>
                    <Label for="name">
                        Name

                        <input
                        type="name"
                        name="name"
                        placeholder="Enter your name here..."
                        style={InputStyle}
                        />
                    </Label>
                </ContactForm>

                <ContactForm>
                    <Label for="email">
                        Email

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email here..."
                            style={InputStyle}
                        />
                    </Label>
                </ContactForm>

                <ContactForm>
                    <Label for="subject">
                        Subject
                        
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter your email subject here..."
                            style={InputStyle}
                        />
                    </Label>
                </ContactForm>

                <ContactForm>
                    <Label for="email_body">
                        Message
                        <textarea
                            name="message"
                            placeholder="Type your message here..."
                            rows="5"
                            style={InputStyle}
                        ></textarea>
                    </Label>
                </ContactForm>

                <Button type="submit">
                    Submit
                </Button>
             </ContactContent>
        </ContactContainer>
    );
}

export default Contact;