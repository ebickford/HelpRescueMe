/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PasswordCreate extends Component {
    state = {
        userName: '',
        password: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPassword(this.state.password);
        this.setState({userName: ''})
        this.setState({password: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div><h1>Complete Account Setup</h1></div>
                    <p>Please enter the email address you used to register your account and create a password.
                        Passwords must be at least 8 characters and contain numbers and letters.</p>
                    <div>
                        <div><input
                            style={formBoxStyle}
                            type="text"
                            name="userName"
                            placeholder="User Name (email)"
                            value={this.state.userName}
                            onChange={this.onChange}
                        />
                        </div>
                        <div><input
                            style={formBoxStyle}
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        </div>
                        {/*todo verify password matches*/}
                        <div><input
                            style={formBoxStyle}
                            type="text"
                            name="password"
                            placeholder="Re-enter Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        </div>
                    </div>
                    <div>
                        <Link to="/account_setup/people">
                            <button className={"btn"} type="button">
                                Submit
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

export default PasswordCreate;