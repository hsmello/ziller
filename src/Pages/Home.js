import React, { useEffect } from 'react';
import './Home.css';

import { gsap } from "gsap";
import AOS from 'aos';
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
        gsap.fromTo('.first_picture_reveal', 1, { x: '0%', display: 'block'}, { x: '100%', display: 'none'})
        // gsap.to('.first_picture_reveal', 1, { x: '100%' });
        gsap.fromTo('.first_picture_img', 1, { scale: '2' }, { scale: '1' })
    }, []);

    return (
        <div className="home">

            <div className="first_block">
                <div className="first_picture">
                    <img className="first_picture_img" src={require('../Images/Ziller.jpeg')} alt="BG"></img>
                </div>
                <div className="first_picture_reveal" />
            </div>



            <div className="second_block" >
                <div className="complete_text" data-aos="fade-up">
                    <div className="second_block_title">
                        RAFAEL ZILLER
                    </div>
                    <div className="second_block_body">
                        Based in Lisbon, Ziller is a Brazilian <span>DJ Set</span> and <span>Producer</span>.
                        <br /><br />
                        Since he was a kid he dreamed about bringing the best out of people through electronic music. The logo represents a double Z, given the public is part of his family and career.
                        <br /><br />
                        Ziller loves Brazilian bass, Tech House and Techno, styles which he explores in his sets.
                    </div>
                    <div className="second_block_link">
                        <br />
                        <a href="/music">LISTEN NOW</a>
                    </div>
                </div>
                <div className='second_picture' data-aos="fade-up">
                    <img src={require('../Images/Ziller_playing.jpeg')} alt="BG"></img>
                </div>
            </div>

        </div>

    );
};

export default Home;
