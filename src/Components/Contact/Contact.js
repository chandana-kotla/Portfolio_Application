import React from 'react';
import './Contact.css'; 

const Contact = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <div className="contact-page">
            
            <div className="contact-details">
                <img src={props.image1} height="10px" width="10px"/>
                <p>{props.address}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                <p>{props.website}</p>
            </div>
            <div className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Type your message"></textarea>
                <button type="submit">Submit</button>
            </div>
        </div>
        </div>
    );
};

export default Contact;
