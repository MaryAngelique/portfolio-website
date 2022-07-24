import React from "react";

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="contact-content">
                <h3 className="contact-title">Let's Chat!</h3>

                <div className="contact-form-container">
                    <div className="contact-form">
                        <div>
                            <label htmlFor="name" className="nameLabel">
                                Name
                            </label>

                            <input
                                required
                                name="name"
                                className="inputName"
                                type={"text"}
                            />  
                        </div>

                        <div>
                            <label htmlFor="email" className="emailLabel">
                                Email
                            </label>

                            <input
                                required
                                name="email"
                                className="inputEmail"
                                type={"text"}
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="descriptionLabel">
                                Description
                            </label>
                            <textarea
                                required
                                name="description"
                                className="inputDescription"
                                type={"text"}
                                rows="5"
                            />
                        </div>
                    </div>

                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;