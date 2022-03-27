import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ContactContainer, ContactH1, ContactFormWrapper, ContactForm, ContactLabel, ContactInput, ContactTextArea, ContactButton } from './ContactSectionStyles';

const ContactSection = () => {

    const [contactForm, setContactForm] = useState([]);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newMessage, setNewMessage] = useState('');




    const addContactInformation = (event) => {
        event.preventDefault();

        const ContactObject = {
            name: newName,
            email: newEmail,
            message: newMessage,
        }
        setContactForm(contactForm.concat(ContactObject));

        axios
            .post('http://127.0.0.1:8000/api', contactForm)
            .then((response) => {
                console.log(response);
            });

        setNewName('');
        setNewEmail('');
        setNewMessage('');

    }

    const addNameChange = (event) => {
        setNewName(event.target.value)
    }
    const addEmailChange = (event) => {
        setNewEmail(event.target.value)
    }

    const addMessageChange = (event) => {
        setNewMessage(event.target.value);
    }

    return (
        <ContactContainer id='contact'>
            <ContactH1>Contact Us</ContactH1>

            <ContactForm onSubmit={addContactInformation} form="contact-form">
                <label>Name <input value={newName} onChange={addNameChange} />
                </label>
                <label>Email
                    <input value={newEmail} onChange={addEmailChange} />
                </label>
                <label>Message <textarea value={newMessage} onChange={addMessageChange} />
                </label>
                <button type="submit">Submit</button>
            </ContactForm>

        </ContactContainer>
    )
}

export default ContactSection;