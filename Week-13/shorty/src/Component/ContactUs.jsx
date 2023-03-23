import React from "react";
import { useState } from "react";
import "../Style/ContactUs.css";
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const onSubmit = () => {
        const data = {
            Name: name,
            Mail: mail, 
            Message: message
        };
        console.log(data);
        toast.success(`Submitted!!`, {
            position: "bottom-right",
            autoClose: 2000,
            closeOnClick: true,
            theme: "dark"
            });
    }
    return (
        <>
            <div className="center">
                <h1>Contact Us</h1>
            </div>
            <div className="center">
                <input className="contactBox"
                    type="text"
                    placeholder="Your Name"
                    onChange={(event) => {setName(event.target.value)}}
                />
            </div>
            <div className="center">
                <input className="contactBox"
                    type="text"
                    placeholder="Your Mail"
                    onChange={(event) => {setMail(event.target.value)}}
                />
            </div>
            <div className="center">
                <input className="contactBox"
                    type="text"
                    placeholder="Your Message"
                    onChange={(event) => {setMessage(event.target.value)}}
                />
            </div>
            <div className="buttonCenter">
                <button className="contactSubmitButton"
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default ContactUs;