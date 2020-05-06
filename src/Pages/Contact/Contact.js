import React from 'react';
import './Contact.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


function Contact() {

    return (
        <div>
            <div className="first_grid" >

                <div className="contact_title">
                    CONTACT
                </div>
                <div className="contact_body">
                    <div className="contact_email">
                        <MailOutlineIcon className="email_icon" />
                       rafaelziller@gmail.com

                    </div>
                    <br />
                    <div className="contat_phone">
                        <PhoneAndroidIcon className="phone_icon" />
                    +351 999 999 999

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Contact;
