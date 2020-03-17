/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Eligibility extends Component {
    render() {
        return (
            <div style={serviceStyle}>
                <h1>Eligibility</h1>
                <p>To be eligible for our service, you must live within 5 miles of a participating rescue.
                    Find out if you are within our service area.</p>
                <div>
                    <Link to="/service_validation">
                        <button className={"btn"} type="button">
                            Check Eligibility
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const serviceStyle = {
    textAlign: 'center',
    padding: '10',
}

export default Eligibility;