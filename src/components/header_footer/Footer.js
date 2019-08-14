import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">la sede</div>
                <div className="footer_copyright">
                    La Sede 2017. All rights reserved.
                </div>
            </Fade>
        </footer>
    )
}
