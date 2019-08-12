import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const PurchaseButton = (props) => {
    return (
        <Button
            href="http://google.com"
            target="_blank"
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}>
            <img 
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            />
            {props.text}
        </Button>
    );
};

export default PurchaseButton;