/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ServiceValidation extends Component {
    state = {
        streetAddress: '',
        addressDetails: '',
        city: '',
        stateCode: '',
        zipCode: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.addTodo(this.state.streetAddress);
        this.setState({streetAddress: ''})
        this.setState({city: ''})
        this.setState({stateCode: ''})
        this.setState({zipCode: ''})
        //todo this is where you will verify if any rescues within the radius are present
        //keep the info to pre-populate the next screen (if eligible)
        //todo replace this with actual validation

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div><h1>Eligibility</h1></div>
                <div>
                    <p>Please enter your address</p>
                    <input
                        style={formBoxStyle}
                        type="text"
                        name="street1"
                        placeholder="Street Address"
                        value={this.state.streetAddress}
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
                    {/*<input type={"submit"}*/}
                    {/*       value={"Submit"}*/}
                    {/*       className={"btn"}*/}
                    {/*       style={{flex: '1'}}/>*/}
                    <Link to="/registration">
                        <button className={"btn"} type="button">
                            Submit
                        </button>
                    </Link>
                </div>
            </form>
        )
    }
}

const formBoxStyle = {
    flex: '10',
    padding: '5px',
    margin: '5px'
}

export default ServiceValidation;