import React from 'react';
import MyCard from './MyCard';
import './Cards.css'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import PicTshirt1 from '../../../Images/tshirt1.png';
import PicTshirt2 from '../../../Images/tshirt2.png';
import PicCap1 from '../../../Images/cap1.jpeg';
import PicCap2 from '../../../Images/cap2.jpeg';

const sliderTshirt = (
    <AwesomeSlider 
        className="slider"
        animation="cubeAnimation"
        organicArrows={false}   
        bullets={true} 
    >
        <div data-src={PicTshirt1} />
        <div data-src={PicTshirt2} />
  </AwesomeSlider>
);

const sliderCap = (
    <AwesomeSlider 
        className="slider"
        animation="cubeAnimation"
        organicArrows={false}   
        bullets={true} 
    >
        <div data-src={PicCap1} />
        <div data-src={PicCap2} />
  </AwesomeSlider>
)

export default function Cards() {
    return (
        <div className="cards_disposal" >
            <div className="individual_card" >

                <MyCard
                    slider={sliderTshirt}
                    product="T-SHIRT"
                    priceBRL="BRAZIL: soon"
                    priceEUR="EUROPE: soon"
                    />
            
            </div>

            <div className="individual_card">

            <MyCard
                slider={sliderCap}
                product="CAP"
                priceBRL="BRAZIL: soon"
                priceEUR="EUROPE: soon"
            />
            
            </div>

        </div>
    )
};