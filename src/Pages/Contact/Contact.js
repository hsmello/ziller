import React from 'react';
import './Contact.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactPic from '../../Images/contactPic.jpg'

function Contact() {

    return (
        <div>
            <div className="first_grid" >

                <div className="contact_pic">
                    <div className="contact_pic_text">
                        {/* Get in touch */}
                    </div>
                    <img src={ContactPic} alt="" />
                </div>

                <div className="contact_text">

                    <div className="contact_title">
                        GET IN TOUCH!
                    </div>
                    <div className="contact_body">

                        <div className="contact_body_text">

                            For any enquiries concerning performance, partnership, marketing, or something of the like, please do not hesitate to ask.
                            <br /> <br />
                            Let's make things happen!
                        </div>

                        <div className="contact_tags">

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

            </div>

        </div>
    );
};

export default Contact;
