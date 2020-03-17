/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import Faq from "../Faq";

class Help extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Help</h1>
                <p>For help with registration or updating information, please send an email to someaddress@mailinator.com
                    or call (800)555-1212, Monday through Friday, 8:00 am to 5:00 pm.</p>
                </div>
                <Faq/>
            </div>
        );
    }
}

export default Help;