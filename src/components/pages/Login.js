/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({userName: ''})
        this.setState({password: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <div>
                <h1>Log In</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input
                        style={{padding: '10px', margin: '5px'}}
                        type="text"
                        name="userName"
                        placeholder="Email Address"
                        value={this.state.userName}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input
                        style={{padding: '10px', margin: '5px'}}
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <Link to="/not_implemented">
                        <button className={"btn"} type="button">
                            Submit
                        </button>
                    </Link>
                    {/*<input type={"submit"}*/}
                    {/*       value={"Submit"}*/}
                    {/*       className={"btn"}*/}
                    {/*       style={{flex: '1'}}/>*/}
                </div>
            </form>
            </div>
        )
    }
}

export default Login;