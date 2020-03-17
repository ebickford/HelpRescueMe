/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import PropertyDetails from "../PropertyDetails";
import People from "../People";
import Pets from "../Pets";

class RescueDisplay extends Component {
    render() {
        return (
            <div>
                <People/>
                <Pets/>
                <PropertyDetails/>
            </div>
        );
    }
}

export default RescueDisplay;