/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ButtonAdd extends Component {
    render() {
        return (
            <div>
                <Link to="/?">
                    <button className={"btn"}>
                        Add Another
                    </button>
                </Link>
            </div>
        );
    }
}

export default ButtonAdd;