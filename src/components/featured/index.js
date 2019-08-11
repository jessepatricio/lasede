import React from 'react';
import Carrousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
        
            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    One OK Rock
                </div>
            </div>

            <Countdown />

        </div>
    );
}; 
export default Featured;