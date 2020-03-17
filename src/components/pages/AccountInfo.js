/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import Household from "../Household";
import AccountHolderInfo from "../AccountHolderInfo";

class AccountInfo extends Component {
    render() {
        return (
            <div>
                <h1>Account Info</h1>
                <AccountHolderInfo/>
                <div>
                    <Household/>
                </div>
            </div>
        );
    }
}

export default AccountInfo;