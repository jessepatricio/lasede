import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <motion.div 
            className="center_wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Highlights</h2>
            <div className="highlight">
            One OK Rock (stylized in all caps as ONE OK ROCK), is a Japanese rock band, formed in Tokyo, Japan in 2005. The band currently consists of Takahiro Moriuchi (vocalist), Toru Yamashita (guitarist, bandleader), Ryota Kohama (bassist), and Tomoya Kanki (drummer). They have been playing many different styles of music, with songs ranging from alternative rock to emo to post-hardcore to pop rock.
            </div>
        </motion.div>
    );
};

export default Description;