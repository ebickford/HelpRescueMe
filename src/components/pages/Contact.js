/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <div><h2>By Email</h2><p>someaddress@mailinator.com</p></div>
                <div><h2>By Phone</h2><p>(800) 555-1212</p></div>
                <div><h2>By Mail</h2><p>PO Box 123, Anytown, ME 04402</p></div>
            </div>
        );
    }
}

export default Contact;