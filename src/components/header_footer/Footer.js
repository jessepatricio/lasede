import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bck_red">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="font_righteous footer_logo_venue">the venue</div>
                <div className="footer_copyright">
                    The Venue 2017. All rights reserved.
                </div>
            </motion.div>
        </footer>
    )
}
