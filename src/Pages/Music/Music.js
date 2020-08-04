import React, { useState, useEffect } from 'react';
import './Music.css';
import MusicArray from './MusicArray';
import SoundCloudMusic from './SoundCloudList'
import AOS from 'aos';
import 'aos/dist/aos'
import WindowDimensions from '../../Hook/WindowDimensions'


function Music() {

    const { height, width } = WindowDimensions();
    const [soundCloudWidth, setSoundCloudWidth] = useState('50%')
    
    useEffect(() => {
        if (width < 769) {
            setSoundCloudWidth('90%')
        } else {
            setSoundCloudWidth('50%')
        }
    }, [width])


    AOS.init({
        duration: 4000,
    });

    return (
        <div className="music_page">
            <img className="music_first_picture" src={require("../../Images/cdj2.png")} alt="" />
            <div className="music_page_title">
                WHAT'S NEW?
            </div>
            <div data-aos="fade-up">
                {MusicArray.map((m, index) => {
                    return (
                        <SoundCloudMusic
                            {...m}
                            key={m.trackTitle}
                            width={soundCloudWidth}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Music;