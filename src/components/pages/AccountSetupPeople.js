/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AccountSetupPeople extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        notes: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state.firstName);
        this.setState({firstName: ''})
        this.setState({lastName: ''})
        this.setState({age: ''})
        this.setState({phone: ''})
        this.setState({notes: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <p>To finish setting up your account, we need to know more about your household.
                    We'll start with your primary residence and the people living there. Pets and other buildings
                    on your property will be added later.</p>
                <br/>

                <form onSubmit={this.onSubmit}>
                    <p>Please enter the following information for each person you want to register in your household.
                        Phone numbers will be made available to the first responders when there is an emergency.
                        We do not share this information with outside parties or use it for marketing.</p>
                    <div>
                        <input
                            style={formBoxStyle}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
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
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
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
                        <input
                            style={formBoxStyle}
                            type="text"
                            name="notes"
                            placeholder="Notes"
                            value={this.state.notes}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <p>
                            When you have finished entering all the people in your household, click 'Next'.
                        </p>
                    </div>
                    <div>
                        <Link to="/not_implemented">
                            <button className={"btn"} type="button">
                                Submit
                            </button>
                        </Link>
                        <Link to="/account_setup/pets">
                            <button className={"btn"} type="button">
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const formBoxStyle = {
    flex: '10',
    padding: '5px',
    margin: '5px'
}

export default AccountSetupPeople;