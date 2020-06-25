import React from 'react';
import './Cards.css';
import Card from './ResponsiveCarousel';

import PicTshirt1 from '../../../Images/tshirt1.png';
import PicTshirt2 from '../../../Images/tshirt2.png';
import PicCap1 from '../../../Images/cap1.png';
import PicCap2 from '../../../Images/cap2.png';

export default function Cards() {
    return (
        <div className="cards_disposal" >
            <div className="individual_card" >

                <Card 
                   title="CAP"
                   pic2={PicCap2}
                   pic1={PicCap1}
                   BRLPrice="30"
                   EURPrice="10" 
                />
            </div>

            <div className="individual_card">
            <Card 
                   title="T-SHIRT"
                   pic1={PicTshirt1}
                   pic2={PicTshirt2 }
                   BRLPrice="30"
                   EURPrice="10" 
                />
            
            </div>

        </div>
    )
};