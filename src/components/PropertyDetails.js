/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class PropertyDetails extends Component {
    render() {
        return (
            <div>
                <div><h2>Property Details</h2>
                    <ul style={{paddingLeft: '15px'}}>
                        <li>Two-story Victorian</li>
                        <li>Water Connection on Right Side</li>
                        <li>Propane Tank (100gal) on Right Side</li>
                        <li>Electrical panel on Left Side</li>
                        <li>Electric Appliances</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PropertyDetails;