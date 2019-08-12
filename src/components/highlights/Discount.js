import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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

                <Fade onReveal={()=> this.disCounter()}>
                <div className="discount_porcentage">
                    <span>{this.state.cntStart}%</span>
                    <span>OFF</span>
                </div>
                </Fade>

                
                <Slide right>
                <div className="discount_description">
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

                </div>
                </Slide>



            </div>
        </div>
    );
}};


export default Discount;