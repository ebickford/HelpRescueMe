/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class Summary extends Component {
    render() {
        return (
            <div style={servicesStyle}>
                <h1>Our Services</h1>
                <p>The 'Help Rescue Me' service makes the details of your home and family available
                    to first responders in emergency situations, making their job and your family a little safer.
                </p>
            </div>
        );
    }
}

const servicesStyle = {
    textAlign: 'center',
    padding: '10',
}

export default Summary;