import React from 'react';
import './Music.css';
import MusicArray from './MusicArray';
import SoundCloudMusic from './SoundCloudList'
import AOS from 'aos';
import 'aos/dist/aos'


function Music() {

    AOS.init({
        duration: 4000,
    });

    return (
        <div className="music_page">
            <img className="first_picture" src={require("../../Images/cdj2.png")} alt="" />
            <div className="music_page_title">
                WHAT'S NEW?
            </div>
            <div data-aos="fade-up">
                {MusicArray.map((m, index) => {
                    return (
                        <SoundCloudMusic
                            {...m}
                            key={m.trackTitle}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Music;