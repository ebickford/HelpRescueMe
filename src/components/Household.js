/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import People from "./People";
import Pets from "./Pets";
import ButtonAdd from "./ButtonAdd";

class Household extends Component {
    render() {
        return (
            <div>
                <h2>Household Members</h2>
                <div id="parent">
                    <div id={"wide"}>
                        <ButtonAdd/>
                        <People/>
                    </div>
                    <div id={"wide"}>
                        <ButtonAdd/>
                        <Pets/>
                    </div>
                    {/*<div id="narrow">Narrow (200px)</div>*/}
                </div>
            </div>
        );
    }
}

export default Household;