import React from 'react';
import { motion } from 'framer-motion';

// Use public directory for icon assets
const icon_calendar = '/icons/calendar.png';
const icon_location = '/icons/location.png';


const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <motion.div 
                        className="vn_item"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div    
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_calendar})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Even Date & Time
                                </div>
                                <div className="vn_desc">
                                    9 November 2026 @9.00 pm
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="vn_item"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div    
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_location})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    AMW Arena, Makati, Philippines
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
        
    );
};

export default VenueInfo;