import React, { Component } from 'react';
import { motion } from 'framer-motion';

import PurchaseButton from '../../components/common/PurchaseButton';

class Discount extends Component {
    
state = {
    cntStart:0,
    cntEnd:30
}

disCounter = () => {
    if (this.state.cntStart < this.state.cntEnd) {
        this.setState({
            cntStart: this.state.cntStart + 1
        })
    }
}

componentDidUpdate(){
    setTimeout(()=>{
        this.disCounter()
    }, 30)
}

render() {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <motion.div 
                    className="discount_porcentage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => this.disCounter()}
                >
                    <span>{this.state.cntStart}%</span>
                    <span>OFF</span>
                </motion.div>

                
                <motion.div 
                    className="discount_description"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Purchase tickets before 20th June</h3>
                    <p>You can buy tickets online or any ticketing office near you.</p>

                    <div>
                        <PurchaseButton 
                            text="Purchase tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="http://google.com" 
                        />
                    </div>

                </motion.div>



            </div>
        </div>
    );
}};


export default Discount;