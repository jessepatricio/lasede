import React, { Component } from 'react'
import PurchaseButton from '../common/PurchaseButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
    
    state = {
        prices: [1000,1500,2500],
        boxes:['Balcony','Medium','Star'],
        desc:['Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Sed id semper risus in hendrerit gravida rutrum quisque non.',
        'A diam sollicitudin tempor id eu. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper'],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]
    
    }

    showBoxes = () => (
        
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.boxes[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <PurchaseButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]} 
                            />        
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {      
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}
