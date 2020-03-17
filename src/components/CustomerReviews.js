/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';

class CustomerReviews extends Component {
    render() {
        return (
            <div style={reviewStyle}>
                <h1>What our customers have to say</h1>
                <p>"We feel better knowing that rescue officials will have as much knowledge
                    as possible about our family, pets and home." - Sandy P. ~Bangor, ME</p>
            </div>
        );
    }
}

const reviewStyle = {
    textAlign: 'center',
    padding: '10',
}

export default CustomerReviews;