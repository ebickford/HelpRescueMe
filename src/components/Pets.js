/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class Pets extends Component {
    render() {
        return (
            <div>
                <h3>Pets</h3>
                <div id="parent" style={gray1}>
                    <div id="wide">Name: Josie</div>
                    <div id="wide">Pet Type: Cat</div>
                    <div id="wide">Color: Gray/White</div>
                    <div id="wide">Notes: Skittish around strangers</div>
                </div>
                <div id="parent" style={gray1}>
                    <div id="wide">Name: Zena</div>
                    <div id="wide">Pet Type: Cat</div>
                    <div id="wide">Color: Black</div>
                    <div id="wide">Notes: Skittish around strangers</div>
                </div>
                <div id="parent">
                    <div id="wide">Name: Floppy</div>
                    <div id="wide">Pet Type: Dog</div>
                    <div id="wide">Color: Black/Tan</div>
                    <div id="wide">Notes: Friendly. Crated at night in living room</div>
                </div>
            </div>
        );
    }
}

// Todo remove this style - is used as a visible separator for display
const gray1 = {
    backgroundColor: '#888'
}

export default Pets;