/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class Faq extends Component {
    render() {
        return (
                //todo - these are samples. Need to store and display with styling
            <div>
                <h2>Frequently Asked Questions (FAQs)</h2>
                <div>
                    <p>Q: How can I tell if I qualify for service?</p>
                    <p>A: From the 'Home' page, select the 'Check Eligibility' button and enter your address. </p>
                </div>
                <div>
                    <p>Q: How much does the service cost?</p>
                    <p>A: The service fee is $25 annually, per household.  This fee covers the primary residence.
                        Any additional structures, such as barns or detached garages are an additional fee of $10 anually per structure.</p>
                </div>
            </div>
        );
    }
}

export default Faq;