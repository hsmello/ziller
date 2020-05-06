import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSpotify,
    faInstagram,
    faFacebook,
    faSoundcloud
} from '@fortawesome/free-brands-svg-icons';
import LogoZiller from '../Images/logo_ziller_white_nullbackground.png';


function Footer() {
    return (
        <div className="footer">
            <img className="logo_ziller" src={LogoZiller} alt="" />
            <div className="socialMediaTags">
                <a
                    className="instagram social"
                    href="http://www.instagram.com/zillermusic"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                    className="facebook social"
                    href="https://www.facebook.com/rziller2"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                    className="soundcloud social"
                    href="https://soundcloud.com/rafael-ziller/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faSoundcloud} size="2x" />
                </a>
                <a
                    className="spotify social"
                    href="http://www.youtube.com.br"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faSpotify} size="2x" />
                </a>


            </div>

            <div className="copyright">
                <h5>Copyright © 2020 All rights reserved.</h5>
            </div>
        </div>
    );
};

export default Footer;