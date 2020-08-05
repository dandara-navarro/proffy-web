import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/37806296?s=460&u=e5e61697c08645e8e2569e7b8e6053e925e639b9&v=4" alt="Dandara" />
                <div>
                    <strong>Dandara Navarro</strong>
                    <span>Chemistry</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                <br /> <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <footer>
                <p>
                    Price per hour
                    <strong>$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp Icon"/>
                    Contact
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;