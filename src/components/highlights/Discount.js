import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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
    }, 300)
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
                        Button
                    </div>

                </div>
                </Slide>



            </div>
        </div>
    );
}};


export default Discount;