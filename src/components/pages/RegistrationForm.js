/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RegistrationForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        streetAddress: '',
        addressDetails: '',
        city: '',
        stateCode: '',
        zipCode: '',
        emailAddress: '',
        phoneNumber: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.firstName);
        this.setState({firstName: ''})
        this.setState({lastName: ''})
        this.setState({streetAddress: ''})
        this.setState({addressDetails: ''})
        this.setState({city: ''})
        this.setState({stateCode: ''})
        this.setState({zipCode: ''})
        this.setState({emailAddress: ''})
        this.setState({PhoneNumber: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div><h1>Registration Information</h1></div>
                <p>Great news! We are currently offering service in your area. Please fill out the remaining
                    information below.</p>
                <div>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.onChange}
                    />
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="street1"
                        placeholder="Street Address"
                        value={this.state.streetAddress}
                        onChange={this.onChange}
                    />
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="addressDetails"
                        placeholder="Apt, Box #, Unit"
                        value={this.state.addressDetails}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="city"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.onChange}
                    />
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="state"
                        placeholder="State"
                        value={this.state.stateCode}
                        onChange={this.onChange}
                    />
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={this.state.zipCode}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="emailAddress"
                        placeholder="Email Address"
                        value={this.state.emailAddress}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <p>
                        We will send you a confirmation email soon.  Please click the link in the message
                        to confirm your email address, create a password, and continue setting up your account.
                    </p>
                </div>
                <div>
                    <Link to="/register_submit">
                        <button className={"btn"} type="button">
                            Submit
                        </button>
                    </Link>
                </div>
                {/*<div>*/}
                {/*    <input type={"submit"}*/}
                {/*           value={"Submit"}*/}
                {/*           className={"btn"}*/}
                {/*           style={{flex: '1'}}/>*/}
                {/*</div>*/}
            </form>
        )
    }
}

const formBoxStyle = {
    flex: '10',
    padding: '5px',
    margin: '5px'
}

export default RegistrationForm;