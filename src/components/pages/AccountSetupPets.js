/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AccountSetupPets extends Component {
    state = {
        name: '',
        petType: '',
        color: '',
        notes: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPet(this.state.name);
        this.setState({name: ''})
        this.setState({petType: ''})
        this.setState({color: ''})
        this.setState({notes: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <p>Add any pets that live in your primary residence. If you do not wish to register
                pets, please click 'Next'.</p>
                <br/>

                <form onSubmit={this.onSubmit}>
                    <p>Please enter the following information for each pet you want to register in your household.
                        Use the 'Notes' section to provide any helpful information,
                        such as the location of a crate or terrarium, and whether your pet has access to the outdoors
                        (like through a pet door).</p>
                    <div>
                        <input
                            style={formBoxStyle}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            style={formBoxStyle}
                            type="text"
                            name="petType"
                            placeholder="Type of Pet"
                            value={this.state.petType}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            style={formBoxStyle}
                            type="text"
                            name="color"
                            placeholder="Color"
                            value={this.state.color}
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
                            When you have finished entering all the pets in your household, click 'Next'.
                        </p>
                    </div>
                    <div>
                        <Link to="/not_implemented">
                            <button className={"btn"} type="button">
                                Submit
                            </button>
                        </Link>
                        <Link to="/not_implemented">
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

export default AccountSetupPets;