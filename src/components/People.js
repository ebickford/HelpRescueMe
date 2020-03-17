/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class People extends Component {
    render() {
        return (
            <div>
                <h3>People</h3>
                <div id="parent" style={gray1}>
                    <div id="wide">Name: Erika</div>
                    <div id="wide">Age: 41</div>
                    <div id="wide">Phone: (207) 626-0741</div>
                    <div id="wide">Notes: None</div>
                </div>
                <div id="parent">
                    <div id="wide">Name: Adam</div>
                    <div id="wide">Age: 44</div>
                    <div id="wide">Phone: (207) 626-0742</div>
                    <div id="wide">Notes: None</div>
                </div>
            </div>
        );
    }
}

// Todo remove this style - is used as a visible separator for display
const gray1 = {
    backgroundColor: '#888'
}

export default People;