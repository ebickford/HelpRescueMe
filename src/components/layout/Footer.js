/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer style={footerStyle}>
            <div>
                <Link style={linkStyle} to={"/help"}>Help</Link> |
                <Link  style={linkStyle} to={"/contact"}> Contact Us </Link>
            </div>
            </footer>
        );
    }
}

const footerStyle = {
    background: '#777',
    color: '#fff',
    textAlign: 'center',
    padding: '10'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Footer;