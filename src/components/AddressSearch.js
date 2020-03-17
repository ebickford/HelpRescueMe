import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AddressSearch extends Component {
    render() {
        return (
            <div>
                <h1>Address Search</h1>
                <div>
                    <p>Please enter the address you would like to review.</p>
                    <form onSubmit={this.onSubmit}>
                            <input
                                style={formBoxStyle}
                                type="text"
                                name="address"
                                placeholder="Address: 123 Someplace St, Raleigh NC"
                            />
                    <div>
                        <Link to="/search_results">
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
                </div>
            </div>
        );
    }
}

const formBoxStyle = {
    flex: '10',
    padding: '5px',
    margin: '5px'
}

export default AddressSearch;