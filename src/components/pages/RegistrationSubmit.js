import React, {Component} from 'react';

class RegistrationSubmit extends Component {
    render() {
        return (
            <div style={ThankYouText}>
                <p>Thank you for registering with <i><strong>Help Rescue
                    Me</strong></i>! Please check your email to complete registration.</p>
            </div>
        );
    }
}

const ThankYouText = {
    textAlign: 'center',
    fontSize: '150%',
    padding: '20%',
    alignContent: 'center'

}

export default RegistrationSubmit;