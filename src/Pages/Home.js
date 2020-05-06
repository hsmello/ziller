import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className="home">

            <img className="first_picture" src={require('../Images/Ziller.jpeg')} alt="BG"></img>

            <div className="second_block" >
                <div className="complete_text" data-aos="fade-up">
                    <div className="second_block_title">
                        RAFAEL ZILLER
                    </div>
                    <div className="second_block_body">
                        Based in Lisbon, Ziller is a Brazilian DJ Set and Producer.
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
                <div data-aos="fade-up">
                    <img className="second_picture" src={require('../Images/Ziller_playing.jpeg')} alt="BG"></img>
                </div>
            </div>

            {/* <div className="third_block">
                <div className="third_block_style">
                    <div>
                        <img className="third_picture" src={require('../Images/cdj.jpg')} alt="" />
                    </div>
                    <div className="third_block_text"  >
                        Stay Tuned.
                        <br />
                        For booking please contact us through +351 999 999 999
                    </div>
                </div>
            </div> */}



        </div>

    );
};

export default Home;
