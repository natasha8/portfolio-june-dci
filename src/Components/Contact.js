import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ data }) => {
    if (data) {
        var contactName = data.fullName;
        var city = data.address.city;
        var phone = data.phone;
        var contactEmail = data.email;
        var contactMessage = data.contactMessage;
    }
    const [submitted, setSubmitted] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_bzi3zmg",
                e.target,
                "user_udtYaMWF0eNR2lXma0im7"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitted(true);
                },
                (error) => {
                    console.log(error.text);
                    setSubmitted(false);
                }
            );
    };

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>
                {!submitted && (
                    <div className="ten columns">
                        <p className="lead">{contactMessage}</p>
                    </div>
                )}
                {submitted && (
                    <div>
                        <i className="fa fa-check"></i> Your message was sent,
                        THANK YOU!
                        <br />
                    </div>
                )}
            </div>

            <div className="row">
                <div className="eight columns">
                    {!submitted && (
                        <form onSubmit={submitForm}>
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">
                                        Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        size="35"
                                        id="contactName"
                                        name="name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">
                                        Email
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        size="35"
                                        id="contactEmail"
                                        name="email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        size="35"
                                        id="contactSubject"
                                        name="subject"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        Message
                                        <span className="required">*</span>
                                    </label>
                                    <textarea
                                        cols="50"
                                        rows="5"
                                        id="contactMessage"
                                        name="message"
                                    ></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="submit">
                                        Submit
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    )}
                </div>

                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Contacts</h4>
                        <p className="address">
                            {contactName}
                            <br />
                            {contactEmail}
                            <br />
                            {city}
                            <br />
                            <span>{phone}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;
