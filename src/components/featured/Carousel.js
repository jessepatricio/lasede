import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

// Use public directory for large image assets (Next.js best practice)
const slide_one = '/slide_one.jpg';
const slide_two = '/slide_two.jpg';
const slide_three = '/slide_three.jpg';


const Carousel = () => {
    const [height, setHeight] = useState(700); // Default height to avoid 0px

    useEffect(() => {
        const updateHeight = () => setHeight(window.innerHeight || 700);
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };

    const wrapperStyle = {
        height: `${height}px`,
        overflow: 'hidden'
    };

    // Using img tags instead of background images for better debugging

    return (
        <div className="carrousel_wrapper" style={wrapperStyle}>
            <Slider {...settings}>
                <div>
                    <img 
                        src={slide_one} 
                        alt="Slide 1"
                        style={{
                            width: '100%',
                            height: `${height}px`,
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>
                <div>
                    <img 
                        src={slide_two} 
                        alt="Slide 2"
                        style={{
                            width: '100%',
                            height: `${height}px`,
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>
                <div>
                    <img 
                        src={slide_three} 
                        alt="Slide 3"
                        style={{
                            width: '100%',
                            height: `${height}px`,
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};
export default Carousel;